class TriggersController < ApplicationController

  def services
    service = Servizio.find(params[:id])
    CreateEvalMovementWorker.perform_async(service.idservizio, service.point, Configurable.default_product_base_risk.to_f)
    head :ok
  end

end