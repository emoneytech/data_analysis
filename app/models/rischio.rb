# == Schema Information
#
# Table name: rischio
#
#  Data     :datetime         not null, primary key
#  IdUtente :bigint           not null, primary key
#  Rischio  :decimal(10, 2)   default(0.0)
#
# Indexes
#
#  Rischio                 (Rischio)
#  rischio_and_data_index  (Data,Rischio)
#
class Rischio < ApplicationCoreRecord

  self.table_name = "rischio"
  self.primary_keys = :IdUtente,:Data

  belongs_to :anagrafica, foreign_key: "IdUtente", class_name: "Anagrafica"

  scope :for_today, -> { where("rischio.Data BETWEEN '#{Time.now.to_date.at_beginning_of_day}' AND '#{Time.now}'")}

  def to_s
    "#{self.Rischio}"
  end
end 
