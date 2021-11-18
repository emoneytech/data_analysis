class CustomerEvaluation < CorePgRecord
  
  belongs_to :anagrafica

  scope :for_month, ->(tuple) { where(eval_month: tuple[1], eval_year: tuple[0]) }
  before_save :set_last_values

  # after_initialize :build_for_tuple

  def self.icon
    'user-shield'
  end
  
  def previous
    CustomerEvaluation.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month < ?) OR (eval_year = ? AND eval_month = 12))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year - 1).order(eval_year: :desc, eval_month: :desc).first
  end
  
  def next
    CustomerEvaluation.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month > ?) OR (eval_year = ? AND eval_month = 1))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year + 1).order(eval_year: :asc, eval_month: :asc).first
  end

  def set_last_values
    set_nr_movements
    set_last_attention_factor
  end

  def to_hsh
    hsh = {}
    self.eval_days.each do |k,v|
      hsh[["7 days attention factor", k]] = self.eval_days[k][0]["details"]["attention_factor"]["day_7"]
      hsh[["30 days attention factor", k]] = self.eval_days[k][0]["details"]["attention_factor"]["day_30"]
      hsh[["7 days attention factor at midnight", k]] = self.eval_days[k][0]["details"]["attention_factor_decreased"]["day_7"]
      hsh[["30 days attention factor at midnight", k]] = self.eval_days[k][0]["details"]["attention_factor_decreased"]["day_30"]
    end
    return hsh
  end

  def build_for_tuple(max_base_risk, min_base_risk, tlf, factor_for_amount, divisor_amount_for_factor, evaluated_movements)
    return unless new_record?
    date = Date.new( eval_year, eval_month, 1 )
    date_end = date.end_of_month
    evaluated_days = {}
    while (date <= date_end)
      evaluated_moevements_for_date = evaluated_movements.select{|h| h["day"]=="#{date}"}
      evaluated_days["#{date}"] = []
      hash = {}
      evaluated_moevements_for_date.each do |evaluated_movement|
        hash.merge!({
          "#{evaluated_movement["movement_id"]}": {
            day_7: set_evaluated_by_recursion(evaluated_movement["recursion_customer_7"], evaluated_movement, divisor_amount_for_factor, factor_for_amount),
            day_30: set_evaluated_by_recursion(evaluated_movement["recursion_customer_30"], evaluated_movement, divisor_amount_for_factor, factor_for_amount) 
          }
        })
      end
      if date == Date.new(eval_year,eval_month,1)
        attention_factor = get_previuos_attention_factor_for_tuple(min_base_risk)
      else
        attention_factor = evaluated_days["#{date - 1.day}"][0][:details][:attention_factor_decreased]
      end
      hash.values.each do |v|
        attention_factor[:day_7]  = attention_factor[:day_7].to_f  * v[:day_7][:evaluated_factor].to_f
        attention_factor[:day_30] = attention_factor[:day_30].to_f * v[:day_30][:evaluated_factor].to_f
      end
      attention_factor[:day_7] = attention_factor[:day_7] >= max_base_risk ? max_base_risk : attention_factor[:day_7]
      attention_factor[:day_30] = attention_factor[:day_30] >= max_base_risk ? max_base_risk : attention_factor[:day_30]
      evaluated_days["#{date}"] << {details: {
        "attention_factor": attention_factor,
        "nr_movements": evaluated_moevements_for_date.count,
        "attention_factor_decreased": decrease_factor(attention_factor, min_base_risk, tlf)
      }}
      date = date.advance(days: 1)
    end
    self.eval_days = evaluated_days
  end

  def decrease_factor(attention_factor, min_base_risk, tlf)
    attention_factor_decreased = {}
    attention_factor_decreased[:day_7] = (attention_factor[:day_7] * tlf).to_f
    attention_factor_decreased[:day_7] = attention_factor_decreased[:day_7] <= min_base_risk ? min_base_risk : attention_factor_decreased[:day_7]
    attention_factor_decreased[:day_30] = (attention_factor[:day_30] * tlf).to_f
    attention_factor_decreased[:day_30] = attention_factor_decreased[:day_30] <= min_base_risk ? min_base_risk : attention_factor_decreased[:day_30]
    return attention_factor_decreased
  end

private

  def get_previuos_attention_factor_for_tuple(min_base_risk)
    date = Date.new(self.eval_year, self.eval_month, 1) - 1.month
    default_min_base_risk = {
      day_7: min_base_risk,
      day_30: min_base_risk
    }
    unless a = CustomerEvaluation.find_by_anagrafica_id_and_eval_year_and_eval_month(self.anagrafica_id, date.year, date.month)
      return default_min_base_risk
    end
    return {
      day_7: a.last_attention_factor7,
      day_30: a.last_attention_factor30
    }
  end


  def set_last_attention_factor
    self.last_attention_factor7 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:attention_factor_decreased].symbolize_keys[:day_7] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:attention_factor].symbolize_keys[:day_7]
    self.last_attention_factor30 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:attention_factor_decreased].symbolize_keys[:day_30] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:attention_factor].symbolize_keys[:day_30]
  end

  def set_nr_movements
    unless self.eval_days.kind_of?(Hash)
      self.nr_movements = 0
      return
    end
    sum = 0
    self.eval_days.values.each { |v| sum += v[0].symbolize_keys[:details].symbolize_keys[:nr_movements] }
    self.nr_movements = sum
  end

  def set_evaluated_by_recursion(recursion, evaluated_movement, divisor_amount_for_factor, factor_for_amount)
    unless recursion > 0
      evaluated_factor =
        (
          (
            (
              (
                ((evaluated_movement["product_base_risk"].percentage_of(1)) - 100) *
                evaluated_movement["product_base_risk"]
              ) *
                (
                  factor_for_amount *
                    ((evaluated_movement["amount_cents"] / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description = "Operation factor: #{evaluated_factor}"
    else
      evaluated_factor =
        (
          (
            (
              (((evaluated_movement["product_base_risk"].percentage_of(1)) - 100) * recursion) *
                (
                  factor_for_amount *
                    ((evaluated_movement["amount_cents"] / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description =
        "Repeated: #{recursion} - Factor: #{evaluated_factor}"
    end
    hash = {
      evaluated_movement: evaluated_movement["id"],
      evaluated_factor: evaluated_factor,
      evaluated_description: evaluated_description,
      recursion: recursion 
    }
    return hash
  end

end

# == Schema Information
#
# Table name: customer_evaluations
#
#  id                      :bigint           not null, primary key
#  eval_days               :jsonb            not null
#  eval_month              :integer          not null
#  eval_year               :integer          not null
#  last_attention_factor30 :float
#  last_attention_factor7  :float
#  nr_movements            :integer          default(0), not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  anagrafica_id           :integer          not null
#
# Indexes
#
#  evaluated_attention_factor_for_month_index             (anagrafica_id,eval_year,eval_month) UNIQUE
#  index_customer_evaluations_on_anagrafica_id            (anagrafica_id)
#  index_customer_evaluations_on_eval_days                (eval_days) USING gin
#  index_customer_evaluations_on_last_attention_factor30  (last_attention_factor30)
#  index_customer_evaluations_on_last_attention_factor7   (last_attention_factor7)
#
