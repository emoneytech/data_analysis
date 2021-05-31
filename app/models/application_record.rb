class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  connects_to database: { writing: :risk, reading: :risk }
end
