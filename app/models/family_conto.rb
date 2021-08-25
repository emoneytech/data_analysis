# == Schema Information
#
# Table name: tipoconto
#
#  idTipoConto           :integer          not null, primary key
#  Tipo                  :string(6)        not null
#  Descrizione           :string(45)       not null
#  limite1               :decimal(10, 2)   default(500.0)
#  limite2               :decimal(10, 2)   default(2500.0)
#  VisualizzaMandati     :boolean          default(FALSE)
#  TesoreriaIssuing      :string(45)
#  TesoreriaUtenze       :string(45)
#  TesoreriaMonetica     :string(45)
#  TesoreriaRicariche    :string(45)
#  TesoreriaRicarichePin :string(45)
#  TesoreriaSpedizioni   :string(45)
#  TesoreriaBonifici     :string(45)
#  TesoreriaCarteServizi :string(45)
#  TesoreriaRicevute     :string(45)
#  TesoreriaIntrapay     :string(45)
#  TesoreriaAsap         :string(45)
#  TesoreriaPayTv        :string(45)
#  TesoreriaProdottiPin  :string(45)
#  TesoreriaEasyPay      :string(45)
#  TesoreriaPrelievi     :string(45)
#  TesoreriaFastPay      :string(45)
#  TesoreriaEvo          :string(45)
#  TesoreriaToken        :string(45)
#  TesoreriaCanoni       :string(45)
#  TesoreriaCommFigp     :string(45)
#  TesoreriaAsapOnline   :string(45)
#  TesoreriaCBS          :string(45)
#  TesoreriaGF           :string(45)
#  TesoreriaAssegni      :string(45)
#
class FamilyConto < ApplicationCoreRecord

  self.table_name = 'tipoconto'
  self.primary_key = 'idTipoConto'

  alias_attribute :id, "idTipoConto"
  alias_attribute :name, "Descrizione"

  def to_s
    "#{self.Descrizione}"
  end
  
end
