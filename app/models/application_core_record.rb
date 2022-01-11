class ApplicationCoreRecord < ActiveRecord::Base
  self.abstract_class = true
  connects_to database: { writing: :core, reading: :core }

  def readonly?
    true
  end
  
end
