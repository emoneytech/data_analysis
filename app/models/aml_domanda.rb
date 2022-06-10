class AmlDomanda < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "aml_domande"
  self.primary_key = 'IdDomanda'

  has_many :answers, foreign_key: "IdDomanda", primary_key: "IdDomanda", class_name: 'AmlRisposta'

  def self.icon
    'clipboard-question'
  end

end

# == Schema Information
#
# Table name: aml_domande
#
#  IdDependence      :integer
#  IdDomanda         :integer          not null, primary key
#  IdQuestionario    :integer          not null
#  NumeroOrdinamento :integer          default(0)
#  TestoDomanda      :text(65535)      not null
#  TestoDomandaBG    :text(65535)
#  TestoDomandaENG   :text(65535)
#  TipoDomanda       :integer          not null
#  descriptionENG    :text(4294967295)
#  descriptionIT     :text(4294967295)
#
# Indexes
#
#  IdCampagna_idx  (IdQuestionario)
#
# Foreign Keys
#
#  IdQuestionario  (IdQuestionario => aml_questionario.IdQuestionario)
#
