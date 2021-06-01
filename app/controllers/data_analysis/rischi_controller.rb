module DataAnalysis
  class RischiController < DataAnalysisController
    
    def index 
      @rischi = Rischio.for_today.order(Rischio: :desc).page(params[:page]).per(params[:per])
    end

  end
end
