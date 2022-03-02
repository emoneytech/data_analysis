class Algorithm < CorePgRecord

  has_many :algorithm_algorithm_calculators, dependent: :destroy
  accepts_nested_attributes_for :algorithm_algorithm_calculators, reject_if: :all_blank, allow_destroy: true

  has_many :algorithm_calculators, through: :algorithm_algorithm_calculators
  has_many :customer_categories, -> { distinct }, through: :algorithm_calculators

  # scope :default, -> { where(default: true).first }
  
  validates :default, uniqueness: true, presence: true, if: :default
  before_validation :check_abscissa

  amoeba do
    enable
  end

  def self.icon
    'square-root-variable'
  end

  def value
    opts = self.algorithm_calculators.map{|v| ["#{v.name}", v.default_value.to_f]}.to_h
    calculator = Keisan::Calculator.new
    calculator.evaluate(self.eq, opts)
  end

  def calculate(customer_category_id, amount, recursion, country, product)
    # opts = self.algorithm_calculators.map{|v| ["#{v.name}", v.value_for(customer_category_id,eval("#{v.name}".gsub!("_factor","")).to_f).to_f]}.to_h
    calculator = Keisan::Calculator.new
    calculator.evaluate(self.eq, self.opts(customer_category_id, amount, recursion, country, product))
  end

  def opts(customer_category_id, amount, recursion, country, product)
    self.algorithm_calculators.map{|v| ["#{v.name}", v.value_for(customer_category_id,eval("#{v.name}".gsub!("_factor","")).to_f).to_f]}.to_h
  end

  def abscissa
    self.algorithm_algorithm_calculators.default_abscissa.first.try(:algorithm_calculator).try(:name)
  end

  private

  def calculate_factor(eq, opts)
    calculator = Keisan::Calculator.new
    calculator.evaluate(eq, opts)
  end

  def check_abscissa
    count = 0
    self.algorithm_algorithm_calculators.each do |ac|
      count += 1 if ac.abscissa
    end
    errors.add(:algorithm_algorithm_calculators, "Select a value for abscissa") if count != 1
  end


end

# == Schema Information
#
# Table name: algorithms
#
#  id           :bigint           not null, primary key
#  default      :boolean          default(FALSE), not null
#  eq           :string           not null
#  name         :string           not null
#  presentation :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_algorithms_on_default  (default)
#  index_algorithms_on_name     (name) UNIQUE
#
