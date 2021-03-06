# == Schema Information
#
# Table name: eval_customers
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
#  attention_factor_for_month_index                 (anagrafica_id,eval_year,eval_month) UNIQUE
#  index_eval_customers_on_anagrafica_id            (anagrafica_id)
#  index_eval_customers_on_eval_days                (eval_days) USING gin
#  index_eval_customers_on_last_attention_factor30  (last_attention_factor30)
#  index_eval_customers_on_last_attention_factor7   (last_attention_factor7)
#
class EvalCustomer < CorePgRecord
  belongs_to :anagrafica
#  serialize :eval_days, JSON

  scope :for_month, ->(tuple) { where(eval_month: tuple[1], eval_year: tuple[0]) }
  before_save :set_last_values

  def self.icon
    'user-shield'
  end
  
  def previous
    EvalCustomer.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month < ?) OR (eval_year = ? AND eval_month = 12))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year - 1).order(eval_year: :desc, eval_month: :desc).first
  end
  
  def next
    EvalCustomer.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month > ?) OR (eval_year = ? AND eval_month = 1))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year + 1).order(eval_year: :asc, eval_month: :asc).first
  end

  def set_last_values
    set_nr_movements
    set_last_attention_factor
  end

  def to_hsh
    hsh = {}
    self.eval_days.each do |k,v|
      hsh[["7 days attention factor", k]] = self.eval_days[k][0]["details"]["current_risk"]["day_7"]
      hsh[["30 days attention factor", k]] = self.eval_days[k][0]["details"]["current_risk"]["day_30"]
      hsh[["7 days attention factor at midnight", k]] = self.eval_days[k][0]["details"]["current_risk_decreased"]["day_7"]
      hsh[["30 days attention factor at midnight", k]] = self.eval_days[k][0]["details"]["current_risk_decreased"]["day_30"]
    end
    return hsh
  end

private
  def set_last_attention_factor
    self.last_attention_factor7 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk_decreased].symbolize_keys[:day_7] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk].symbolize_keys[:day_7]
    self.last_attention_factor30 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk_decreased].symbolize_keys[:day_30] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk].symbolize_keys[:day_30]
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

end
