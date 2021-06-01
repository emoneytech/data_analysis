module DataAnalysis
  class RischiController < DataAnalysisController
    
    def index 
      @rischi = Rischio.order(Data: :desc, Rischio: :desc).page(params[:page]).per(params[:per])
    end

  end
end
