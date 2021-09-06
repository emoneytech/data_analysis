module Customers
  class TimeLapseFactorAuditsController < CustomersController
    load_and_authorize_resource :time_lapse_factor

    def index
      add_breadcrumb TimeLapseFactorAudit.model_name.human(count: 2), [:customers, @anagrafica, @time_lapse_factors, :tima_lapse_factor_audits]
      @time_lapse_factor_audits = @time_lapse_factor.time_lapse_factor_audits
    end

  end
end
