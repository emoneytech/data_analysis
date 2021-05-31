# == Schema Information
#
# Table name: incassoAssegno
#
#  idincassoAssegno :integer          not null, primary key
#  idservizio       :bigint           not null
#  idAssegno        :string(45)
#  Nome             :string(145)
#  Cognome          :string(45)
#  codicefiscale    :string(45)
#  metodoIncasso    :string(50)
#  numeroCartaConto :string(45)
#  iban             :string(45)
#  stato            :integer
#  feeIncasso       :decimal(10, 2)
#  importo          :decimal(10, 2)
#  dataEmissione    :date
#  dataIncasso      :datetime
#  causale          :string(100)
#
class IncassoAssegno < ApplicationCoreRecord

  self.table_name = 'incassoAssegno'
  self.primary_key = 'idincassoAssegno'

  def beneficiary_name
    "#{self.Nome} #{self.Cognome}"
  end

  def beneficiary_iban
    self.iban && self.iban != '' ? "#{self.iban}" : "#{self.numeroCartaConto}"
  end

  def beneficiary_other
    method = case self.metodoIncasso
    when '7427ae94-8bc3-4133-88fc-aeecbfabde40'
      'Bankwire'
    when '998299af-4bc6-4856-8abf-5d8a38e02edc'
      'Em@ney Card Account'
    else
      'Other methods'
    end
    return "#{self.codicefiscale}|#{method}"
  end

end
