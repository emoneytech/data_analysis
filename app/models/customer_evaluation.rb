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

  def trend
    size = self.eval_days.count
    if size > 1
      param1 = self.eval_days.max(2)[0][1]["details"]["attention_factor_decreased"]["day_30"]
      param2 = self.eval_days.max(2)[1][1]["details"]["attention_factor_decreased"]["day_30"]
      if param1 > param2
        str = 'growing'
      elsif param1 == param2
        str = 'stable'
      elsif param1 < param2
        str = 'down'
      end
    else
      str = previous ? previous.trend : 'equal'
    end
  end
  
  def evaluated_movements(limit = false)
    result = anagrafica.evaluated_movements.select(
        'evaluated_movements.*, movement_created_at::date as day'
      ).with_all_for_year(self.eval_year).with_all_for_month(self.eval_month)
    result.limit(limit) if limit
    return result
  end

  def evaluated_movements_for_day(day = nil)
    day = Date.today unless day
    evaluated_movements.with_all_for_day(day)
  end

  def set_last_values
    set_nr_movements
    set_last_attention_factor
  end

  def to_hsh
    hsh = {}
    self.eval_days.each do |k,v|
      hsh[["7 days attention factor", k]] = self.eval_days[k]["details"]["attention_factor"]["day_7"]
      hsh[["30 days attention factor", k]] = self.eval_days[k]["details"]["attention_factor"]["day_30"]
      hsh[["7 days attention factor at midnight", k]] = self.eval_days[k]["details"]["attention_factor_decreased"]["day_7"]
      hsh[["30 days attention factor at midnight", k]] = self.eval_days[k]["details"]["attention_factor_decreased"]["day_30"]
    end
    return hsh
  end

  def hash_factors_for_day(day = nil, evaluated_movements_for_day = nil)
    day = Date.today unless day
    evaluated_movements_for_day = evaluated_movements.with_all_for_day(day).as_json unless evaluated_movements_for_day
    hash = {}
    day_7 = 1
    day_30 = 1
    evaluated_movements_for_day.each do |evaluated_movement|
      hash.merge!({
        "#{evaluated_movement["movement_id"]}" => {
          "day_7" => evaluated_movement["evaluated_factor7"],
          "day_30" => evaluated_movement["evaluated_factor30"]
        },
      })
    end
    return hash
  end

  def evaluated_factors_for_day(day = nil, evaluated_movements_for_day = nil)
    day = Date.today unless evaluated_movements_for_day
    evaluated_movements_for_day = evaluated_movements.with_all_for_day(day).as_json unless evaluated_movements_for_day
    day_7 = 1
    day_30 = 1
    evaluated_movements_for_day.each do |evaluated_movement|
      day_7 = day_7 * evaluated_movement["evaluated_factor7"]
      day_30 = day_30 * evaluated_movement["evaluated_factor30"]
    end
    return {
      "day_7" => day_7,
      "day_30" => day_30
    }
  end
  
  def recalculate(
      evaluated_movements = nil,
      max_base_risk = Configurable.max_base_risk.to_f,
      min_base_risk = Configurable.min_base_risk.to_f,
      tlf = Configurable.time_lapse_factor.to_f
    )
    evaluated_movements = self.evaluated_movements.as_json unless evaluated_movements
    day = Date.new( eval_year, eval_month, 1 )
    date_end = day.end_of_month >= Date.today ? Date.today : day.end_of_month 
    hash_recalculate = {}
    while (day <= date_end)
      evaluated_movements_for_day = evaluated_movements.select{|h| h["day"]=="#{day}"}
      hash = hash_factors_for_day(day, evaluated_movements_for_day)
      hash_recalculate["#{day}"] = { "movements" => hash }
      if day == Date.new(self.eval_year, self.eval_month, 1)
        attention_factor = get_previuos_attention_factor_for_tuple(min_base_risk)
      else
        attention_factor = hash_recalculate["#{day - 1.days}"]["details"]["attention_factor_decreased"]
      end
      evaluated_factors_for_day = self.evaluated_factors_for_day(day, evaluated_movements_for_day)
      value7 = attention_factor["day_7"].to_f  * evaluated_factors_for_day["day_7"].to_f
      value30 = attention_factor["day_30"].to_f * evaluated_factors_for_day["day_30"].to_f
      hash_att = {
        "day_7" => value7 >= max_base_risk ? max_base_risk : value7,
        "day_30" => value30 >= max_base_risk ? max_base_risk : value30
      }
      if (day > Date.today) 
        attention_factor_decreased = decrease_factor(hash_att, min_base_risk, tlf)
      else
        attention_factor_decreased = hash_att
      end
      hash2 = {
        "attention_factor" => hash_att,
        "nr_movements" => evaluated_movements_for_day.count,
        "attention_factor_decreased" => attention_factor_decreased
      }
      hash_recalculate["#{day}"]["details"] = hash2 
      day = day.advance(days: 1)
    end
    self.eval_days = hash_recalculate
  end

  def calculate_day(
      day = nil,
      hash_recalculate = nil,
      max_base_risk = Configurable.max_base_risk.to_f,
      min_base_risk = Configurable.min_base_risk.to_f,
      tlf = Configurable.time_lapse_factor.to_f
    )
    
    # setting params for today unless params
    day = Date.today unless day
    hash_recalculate = self.eval_days unless hash_recalculate

    evaluated_movements_for_day = self.evaluated_movements.as_json.select{|h| h["day"]=="#{day}"}
    hash = hash_factors_for_day(day, evaluated_movements_for_day)
    hash_recalculate = Hash.new if hash_recalculate == "{}"
    hash_recalculate["#{day}"] = { "movements" => hash }
    if day == Date.new(self.eval_year, self.eval_month, 1)
      attention_factor = get_previuos_attention_factor_for_tuple(min_base_risk)
    else
      attention_factor = hash_recalculate["#{day - 1.days}"]["details"]["attention_factor_decreased"]
    end
    evaluated_factors_for_day = self.evaluated_factors_for_day(day, evaluated_movements_for_day)
    value7 = attention_factor["day_7"].to_f  * evaluated_factors_for_day["day_7"].to_f
    value30 = attention_factor["day_30"].to_f * evaluated_factors_for_day["day_30"].to_f
    hash_att = {
      "day_7" => value7 >= max_base_risk ? max_base_risk : value7,
      "day_30" => value30 >= max_base_risk ? max_base_risk : value30
    }
    
    if (day > Date.today) 
      attention_factor_decreased = decrease_factor(hash_att, min_base_risk, tlf)
    else
      attention_factor_decreased = hash_att
    end

    hash2 = {
      "attention_factor" => hash_att,
      "nr_movements" => evaluated_movements_for_day.count,
      "attention_factor_decreased" => attention_factor_decreased
    }
    hash_recalculate["#{day}"]["details"] = hash2
    return hash_recalculate
  end

  def decrease_factor(attention_factor, min_base_risk, tlf)
    hsh = {}
    hsh["day_7"] = (attention_factor["day_7"] * tlf).to_f
    hsh["day_7"] = hsh["day_7"] <= min_base_risk ? min_base_risk : hsh["day_7"]
    hsh["day_30"] = (attention_factor["day_30"] * tlf).to_f
    hsh["day_30"] = hsh["day_30"] <= min_base_risk ? min_base_risk : hsh["day_30"]
    return hsh
  end

private

  def get_previuos_attention_factor_for_tuple(min_base_risk)
    date = Date.new(self.eval_year, self.eval_month, 1) - 1.month
    default_min_base_risk = {
      "day_7" => min_base_risk,
      "day_30" => min_base_risk
    }
    unless a = CustomerEvaluation.find_by_anagrafica_id_and_eval_year_and_eval_month(self.anagrafica_id, date.year, date.month)
      return default_min_base_risk
    end
    return {
      "day_7" => a.last_attention_factor7,
      "day_30" => a.last_attention_factor30
    }
  end


  def set_last_attention_factor
    self.last_attention_factor7 = self.eval_days.values.last.symbolize_keys[:details].symbolize_keys[:attention_factor_decreased].symbolize_keys[:day_7] || self.eval_days.values.last.symbolize_keys[:details].symbolize_keys[:attention_factor].symbolize_keys[:day_7]
    self.last_attention_factor30 = self.eval_days.values.last.symbolize_keys[:details].symbolize_keys[:attention_factor_decreased].symbolize_keys[:day_30] || self.eval_days.values.last.symbolize_keys[:details].symbolize_keys[:attention_factor].symbolize_keys[:day_30]
  end

  def set_nr_movements
    unless self.eval_days.kind_of?(Hash)
      self.nr_movements = 0
      return
    end
    sum = 0
    self.eval_days.values.each { |v| sum += v.symbolize_keys[:details].symbolize_keys[:nr_movements] }
    self.nr_movements = sum
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
