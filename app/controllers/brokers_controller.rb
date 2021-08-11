class BrokersController < DataAnalysisController
  load_and_authorize_resource :vendor
  add_breadcrumb helpers.raw("#{helpers.fa_icon('money-check')} #{Vendor.model_name.human(count: 2)}"), :brokers_vendors
  before_action :set_breadcrumb

  def set_breadcrumb
    add_breadcrumb @vendor.ragionesociale, [:brokers, @vendor]
  end
end
