class AmlRisposta < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "aml_risposte"
  self.primary_key = 'IdRisposta'

  belongs_to :aml_cronologia_questionario,  foreign_key: "IdCronologia", primary_key: "idaml_cronologia_questionario", class_name: 'AmlCronologiaQuestionario'
  
  belongs_to :question,  foreign_key: "IdDomanda", primary_key: "IdDomanda", class_name: 'AmlDomanda'


  def self.icon
    'question'
  end

end

# == Schema Information
#
# Table name: aml_risposte
#
#  DataRisposta        :datetime
#  IdCronologia        :integer
#  IdDomanda           :integer          not null
#  IdPossibileRisposta :integer
#  IdQuestionario      :integer
#  IdRisposta          :integer          not null, primary key
#  IdUtente            :bigint           not null
#  Risposta            :text(65535)      not null
#  TipoDomanda         :integer
#  ValoreRischio       :float(53)
#  ipcall              :string(50)
#
# Indexes
#
#  IdDomanda_idx  (IdDomanda)
#  idcronologia   (IdCronologia)
#
# Foreign Keys
#
#  IdDomanda  (IdDomanda => aml_domande.IdDomanda)
#
