class Customers::IbansController < ApplicationController
  load_and_authorize_resource :anagrafica
  before_action :set_breadcrumb
  
  def index
    @ibans = @anagrafica.ibans.page(params[:page]).per(params[:per])
  end

  def show
    @iban = @anagrafica.ibans.find_by_Iban(params[:id])
    add_breadcrumb @iban.Iban, :customers_anagrafica_iban
  end


private
  def set_breadcrumb
    add_breadcrumb helpers.raw("#{helpers.fa_icon('users')} #{Anagrafica.model_name.human(count: 2)}"), :customers_anagrafiche
    add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{@anagrafica.full_name}"), [:customers, @anagrafica]
    add_breadcrumb helpers.raw("#{helpers.fa_icon('university')} #{Iban.model_name.human(count: 2)}"), :customers_anagrafica_ibans
  end
end

