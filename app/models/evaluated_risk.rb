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
  before_save :set_last_evaluated_risk

  def previous
    EvaluatedRisk.where("anagrafica_id = ? AND eval_year <= ? AND eval_month < ? ", self.anagrafica_id, self.eval_year, self.eval_month).order(eval_year: :desc, eval_month: :desc).first
  end
  
  def next
    EvaluatedRisk.where("anagrafica_id = ? AND eval_year >= ? AND eval_month < ? ", self.anagrafica_id, self.eval_year, self.eval_month).order(eval_year: :desc, eval_month: :desc).first
  end

private
  def set_last_evaluated_risk
    self.last_evaluated_risk = self.eval_days.values.last[:current_risk_decreased] || self.eval_days.values.last[:current_risk]
    sum = 0
    self.eval_days.values.each { |v| sum += v[:nr_movements] }
    self.nr_movements = sum
  end

end
