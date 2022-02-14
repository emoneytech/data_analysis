module EvaluatedMovementCalculator
  extend ActiveSupport::Concern

  included do
    def calculate(recursion = 1)
      # "((product_factor_calculated * recursion_factor_calculated * amount_factor_calculated * (countries_factor_calculated ** 2)) + 100) / 100"
      attention_eq = Configurable.attention_eq
      attention_factor_calculated =
        calculate_factor(
          attention_eq,
          {
            product_factor_calculated: self.product_factor,
            recursion_factor_calculated: self.recursion_factor(recursion),
            amount_factor_calculated: self.amount_factor,
            countries_factor_calculated: self.countries_factor,
          },
        )
    end
  end

  def amount_factor
    amount_eq = Configurable.amount_eq
    return calculate_factor(amount_eq, { x: self.amount.to_f })
  end

  def countries_factor
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
    country_eq = Configurable.country_eq
    return calculate_factor(country_eq, { x: factor })
  end

  def product_factor
    product_eq = Configurable.product_eq
    return calculate_factor(product_eq, { x: self.product_base_risk.to_f })
  end

  def recursion_factor(recursion = 1)
    recursion_eq = "#{Configurable.recursion_eq}"
    recursion = 1 if recursion < 1
    recursion_factor_calculated =
      calculate_factor(recursion_eq, { x: recursion })
  end

  private

  def calculate_factor(eq, opts)
    calculator = Keisan::Calculator.new
    calculator.evaluate(eq, opts)
  end
end
