class AmlQuestionario < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "aml_questionario"
  self.primary_key = 'IdQuestionario'

  has_many :aml_cronologia_questionari, primary_key: :IdQuestionario, foreign_key: :IdQuestionario, class_name: 'AmlCronologiaQuestionario'

  def self.icon
    'clipboard-question'
  end

end

# == Schema Information
#
# Table name: aml_questionario
#
#  DataAttivazione                     :datetime
#  DataCreazione                       :datetime         not null
#  Destinatario(2 = USER,3 = Business) :integer
#  IdQuestionario                      :integer          not null, primary key
#  NomeQuestionario                    :string(100)      not null
#  StatoQuestionario                   :integer          default(0), not null
#  Vendor                              :string(15)       not null
#
