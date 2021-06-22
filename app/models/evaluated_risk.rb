# == Schema Information
#
# Table name: evaluated_risks
#
#  id                  :bigint           not null, primary key
#  anagrafica_id       :integer          not null
#  eval_year           :integer          not null
#  eval_month          :integer          not null
#  nr_movements        :integer          default(0), not null
#  eval_days           :text(65535)
#  last_evaluated_risk :float(24)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class EvaluatedRisk < ApplicationRecord
  belongs_to :anagrafica
  serialize :eval_days, JSON
  
  #@current_tuple = eval "[#{Date.today.year}, #{Date.today.month}]"
  scope :for_month, ->(tuple) { where(eval_month: tuple[1], eval_year: tuple[0]) }
  before_save :set_last_values

  def previous
    EvaluatedRisk.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month < ?) OR (eval_year = ? AND eval_month = 12))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year - 1).order(eval_year: :desc, eval_month: :desc).first
  end
  
  def next
    EvaluatedRisk.where("anagrafica_id = ? AND ((eval_year = ? AND eval_month > ?) OR (eval_year = ? AND eval_month = 1))", self.anagrafica_id, self.eval_year, self.eval_month, self.eval_year + 1).order(eval_year: :asc, eval_month: :asc).first
  end

  def set_last_values
    set_nr_movements
    set_last_evaluated_risk
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
  def set_last_evaluated_risk
    self.last_evaluated_risk7 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk_decreased].symbolize_keys[:day_7] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk].symbolize_keys[:day_7]
    self.last_evaluated_risk30 = self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk_decreased].symbolize_keys[:day_30] || self.eval_days.values.last[0].symbolize_keys[:details].symbolize_keys[:current_risk].symbolize_keys[:day_30]
  end

  def set_nr_movements
    unless self.eval_days.kind_of?(Hash)
      self.nr_movements = 0
      return
    end
    sum = 0
    # binding.pry
    self.eval_days.values.each { |v| sum += v[0].symbolize_keys[:details].symbolize_keys[:nr_movements] }
    self.nr_movements = sum
  end

end
