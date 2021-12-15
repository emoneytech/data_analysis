module DataAnalysis
  class RelazioniAnagraficheController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon(RelazioniAnagrafica.icon)} #{RelazioniAnagrafica.model_name.human(count: 2)}"), :data_analysis_relazioni_anagrafiche

    def index
      
      @relazioni_anagrafiche = @relazioni_anagrafiche.includes(:owner, :company).page(params[:page]).per(params[:per])
    end
    
    def show 
      add_breadcrumb @relazioni_anagrafica.company, :data_analysis_relazioni_anagrafica
    end

  end
end
