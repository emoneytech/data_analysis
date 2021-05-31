module DataAnalysis
  class SyncController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :sync }
    add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index
    add_breadcrumb "Sync", :data_analysis_sync_index_path
    
    def index
      @syncable = %w(Bintype Tipo Codicetabella Gruppo Prodotto Vendor Anagrafica Mandato Conto Servizio Movimentoconto)
    end

  end
end