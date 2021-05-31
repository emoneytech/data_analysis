class Numeric

  def percentage_of(n)
    self.to_f / n.to_f * 100.0
  end

  def percent_of(n)
    self.to_f / 100 * n.to_f
  end

end
