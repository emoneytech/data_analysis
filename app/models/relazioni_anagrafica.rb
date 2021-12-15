# == Schema Information
#
# Table name: relazioni_anagrafiche
#
#  RappresentanteLegale                        :integer          default(0)
#  creationDate                                :datetime
#  endRelation                                 :datetime
#  idCreator                                   :integer
#  idLegato                                    :bigint
#  idModificatory                              :integer
#  idTableRelathion                            :integer          not null, primary key
#  idTipoLegato                                :integer
#  idTipoRelazione(1:UBO\n2:Director\n3:Owner) :integer
#  idUtente                                    :bigint
#  lastModifyDate                              :datetime
#  note                                        :text(4294967295)
#  percentualeubo                              :float(53)        default(0.0)
#  societa                                     :text(4294967295)
#  societamadre                                :text(4294967295)
#  status                                      :integer          default(1)
#
# Indexes
#
#  idlegato  (idLegato)
#  idutente  (idUtente)
#
class RelazioniAnagrafica < ApplicationCoreRecord

  self.table_name = 'relazioni_anagrafiche'
  self.primary_key = 'idTableRelathion'

  alias_attribute :id, "idTableRelathion"
  
  belongs_to :owner, primary_key: "IdUtente", foreign_key: "idUtente", class_name: 'Anagrafica'
  belongs_to :company, primary_key: "IdUtente", foreign_key: "idLegato", class_name: 'Anagrafica'
  # has_many :conti, primary_key: "idstato", foreign_key: "ProductState", class_name: "Conto"

  scope :ubos, ->{ where(idTipoRelazione: 1).order(percentualeubo: :desc) }
  scope :directors, ->{ where(idTipoRelazione: 2) }
  scope :owners, ->{ where(idTipoRelazione: 3).order(percentualeubo: :desc) }
   
  def self.icon
    "project-diagram"
  end
  
  def tipo_relazione
    case self.idTipoRelazione
    when 1
      "UBO"
    when 2
      "Director"
    when 3
      "Owner"
    else
      'wrong params'
    end
  end
end
