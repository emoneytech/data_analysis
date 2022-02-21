class CustomerCategory < CorePgRecord
  
  has_one :algorithm_calculator, dependent: :destroy

  validates :field_name, presence: true
  validates :field_operator, presence: true
  validates :field_type, presence: true
  validates :value, presence: true

  FIELD_TYPES = %w(string number)
  
  def to_s
    "#{self.name}"
  end
  
  def self.icon
    'user-group'
  end
  
  FIELD_OPERATORS = %w(between equal major major_or_equal minor minor_or_equal different like)
  def self.field_operators
    FIELD_OPERATORS
  end

  def self.field_types
    FIELD_TYPES
  end

  def field_props
    Anagrafica.alive.group("#{field_name}")
  end
  
  def query_result
    sql = Anagrafica.alive
    case self.field_operator
    when 'between'
      min, max = self.value.split(',') 
      sql = sql.where(self.field_name.to_sym => min..max)
    when 'equal'
      sql = sql.where("#{self.field_name} = ?", self.value)
    when 'major'
      sql = sql.where("#{self.field_name} > ?", self.value)
    when 'major_or_equal'
      sql = sql.where("#{self.field_name} >= ?", self.value)
    when 'minor'
      sql = sql.where("#{self.field_name} < ?", self.value)
    when 'minor_or_equal'
      sql = sql.where("#{self.field_name} <= ?", self.value)
    when  'different'
      sql = sql.where("#{self.field_name} != ?", self.value)
    when 'like'
      sql = sql.where("#{self.field_name} like ?", "%#{self.value}")
    end
    return sql
  end

end

# == Schema Information
#
# Table name: customer_categories
#
#  id             :bigint           not null, primary key
#  field_name     :string           not null
#  field_operator :string           not null
#  field_type     :string           not null
#  name           :string           not null
#  value          :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_customer_categories_on_name  (name)
#
