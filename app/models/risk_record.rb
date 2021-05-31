class RiskRecord < ApplicationRecord
  self.abstract_class = true

  connects_to database: { writing: :risk }
end
