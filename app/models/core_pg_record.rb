class CorePgRecord < ApplicationRecord
  self.abstract_class = true

  connects_to database: { writing: :core_pg, reading: :core_pg }
end
