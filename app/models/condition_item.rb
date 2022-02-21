class ConditionItem < CorePgRecord
  FIELD_OPERATORS = %w(between equal major major_or_equal minor minor_or_equal different like)
  belongs_to :conditional_var

  validates :field_value, presence: true
  validates :eq, presence: true

  validates :field_operator, presence: true, uniqueness: {scope: [:conditional_var, :field_value]}, inclusion: { in: FIELD_OPERATORS }

  def self.field_operators
    FIELD_OPERATORS
  end

  def self.icon
    'info'
  end

  def field_props
    Anagrafica.alive.group("#{conditional_var.field_source_name}")
  end
  
  def query_result
    sql = Anagrafica.alive
    case self.field_operator
    when 'between'
      min, max = self.field_value.split(',') 
      sql = sql.where(conditional_var.field_source_name.to_sym => min..max)
    when 'equal'
      sql = sql.where("#{conditional_var.field_source_name} = ?", self.field_value)
    when 'major'
      sql = sql.where("#{conditional_var.field_source_name} > ?", self.field_value)
    when 'major_or_equal'
      sql = sql.where("#{conditional_var.field_source_name} >= ?", self.field_value)
    when 'minor'
      sql = sql.where("#{conditional_var.field_source_name} < ?", self.field_value)
    when 'minor_or_equal'
      sql = sql.where("#{conditional_var.field_source_name} <= ?", self.field_value)
    when  'different'
      sql = sql.where("#{conditional_var.field_source_name} != ?", self.field_value)
    when 'like'
      sql = sql.where("#{conditional_var.field_source_name} like ?", "%#{self.field_value}")
    end
    return sql
  end

  def value
    return self.eq if "x".in? self.eq.downcase
    x = self.field_value.to_i
    calculator = Keisan::Calculator.new
    calculator.evaluate(self.eq, {x: x})
  end

end

# == Schema Information
#
# Table name: condition_items
#
#  id                 :bigint           not null, primary key
#  eq                 :string           not null
#  field_operator     :string           not null
#  field_value        :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  conditional_var_id :bigint           not null
#
# Indexes
#
#  index_condition_items_on_conditional_var_id  (conditional_var_id)
#
# Foreign Keys
#
#  fk_rails_...  (conditional_var_id => conditional_vars.id)
#
