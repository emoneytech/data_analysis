module DataAnalysis
  class IbansController < ApplicationController
    before_action :authenticate_user!
    add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index
    add_breadcrumb helpers.raw("#{helpers.fa_icon('university')} #{Iban.model_name.human(count: 2)}"), :data_analysis_ibans
    load_and_authorize_resource :except => [:show]
    respond_to :json, only: :map

    def index
      ibans = Iban.filter(filtering_params).includes(:anagrafica, :conto)
      @ibans = ibans.page(params[:page]).per(params[:per])
    end

    def show
      @iban = Iban.find_by_Iban(params[:id])
      add_breadcrumb @iban.Iban, :data_analysis_iban
    end

    def map
    end

  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :customer_id,
        :conto,
        :iban,
        :type,
        :c
      ).permit! : {}
    end

  end
end

