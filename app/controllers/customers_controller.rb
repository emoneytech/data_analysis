class CustomersController < DataAnalysisController
  load_and_authorize_resource :anagrafica
  add_breadcrumb helpers.raw("#{helpers.fa_icon('users')} #{Anagrafica.model_name.human(count: 2)}"), :customers_anagrafiche
  before_action :set_breadcrumb

  def set_breadcrumb
    add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{@anagrafica.full_name}"), [:customers, @anagrafica]
  end
end
