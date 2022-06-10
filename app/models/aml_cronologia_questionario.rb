class AmlCronologiaQuestionario < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "aml_cronologia_questionario"
  self.primary_key = 'idaml_cronologia_questionario'

  belongs_to :anagrafica, primary_key: "IdUtente", foreign_key: "IdUtente", class_name: "Anagrafica"
  belongs_to :questionario, primary_key: "IdQuestionario", foreign_key: "IdQuestionario", class_name: "AmlQuestionario"

  has_many :answers, foreign_key: "IdCronologia", primary_key: "idaml_cronologia_questionario", class_name: "AmlRisposta"

  scope :alive, -> { where(stato: 1) }


  def self.icon
    'clipboard-question'
  end

end

# == Schema Information
#
# Table name: aml_cronologia_questionario
#
#  IdQuestionario                :integer
#  IdUtente                      :bigint
#  calc_risk_value               :decimal(10, 2)
#  checked                       :integer          default(0)
#  datachecked                   :datetime
#  datacompletamento             :datetime
#  idaml_cronologia_questionario :integer          not null, primary key
#  ipcall                        :string(45)
#  risk_value                    :decimal(10, 2)
#  stato                         :integer
#
# Indexes
#
#  idutente  (IdUtente)
#  stato     (stato)
#
