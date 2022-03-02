module EvaluatedMovementCalculator
  extend ActiveSupport::Concern

  included do
    def calculate(recursion = 1)
      # "((product_factor * recursion_factor * amount_factor * (countries_factor ** 2)) + 100) / 100"
      evaluated_eq = self.algorithm.eq
      evaluated_factor =
        calculate_factor(
          evaluated_eq,
          {
            product_factor: self.product_factor,
            recursion_factor: self.recursion_factor(recursion),
            amount_factor: self.amount_factor,
            country_factor: self.country_factor,
          },
        )
    end
  end

  def amount_factor
    amount_eq = self.algorithm.algorithm_calculators.where(name: 'amount_factor').first.eq_for(self.customer_category.id)
    return calculate_factor(amount_eq, { x: self.amount.to_f })
  end

  def country_factor
    source_country_factor =
      RelatedCountry
        .find_by_alpha2(self.origin_country)
        .try(:attention_factor)
        .try(:to_f) || 1
    destination_country_factor =
      RelatedCountry
        .find_by_alpha2(self.destination_country)
        .try(:attention_factor)
        .try(:to_f) || 1
    factor =
      if source_country_factor > destination_country_factor
        source_country_factor
      else
        destination_country_factor
      end
    country_eq = self.algorithm.algorithm_calculators.where(name: 'country_factor').first.eq_for(self.customer_category.id)
    return calculate_factor(country_eq, { x: factor })
  end

  def product_factor
    product_eq = self.algorithm.algorithm_calculators.where(name: 'product_factor').first.eq_for(self.customer_category.id)
    return calculate_factor(product_eq, { x: self.product_base_risk.to_f })
  end

  def recursion_factor_7
    self.recursion_factor(self.recursion_customer_7)
  end

  def recursion_factor_30
    self.recursion_factor(self.recursion_customer_30)
  end
  
  def recursion_factor(recursion = 1)
    recursion_eq = self.algorithm.algorithm_calculators.where(name: 'recursion_factor').first.eq_for(self.customer_category.id)
    recursion = 1 if recursion < 1
    recursion_factor = calculate_factor(recursion_eq, { x: recursion })
  end

  private

  def calculate_factor(eq, opts)
    calculator = Keisan::Calculator.new
    calculator.evaluate(eq, opts)
  end
end
