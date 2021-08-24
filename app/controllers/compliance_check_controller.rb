class ComplianceCheckController < DataAnalysisController
  add_breadcrumb helpers.raw("#{helpers.fa_icon('user-check')} #{SanctionList.model_name.human(count: 2)}"), [:compliance_check, :sanction_lists]
  load_and_authorize_resource :sanction_list
  before_action :set_breadcrumb

  def set_breadcrumb
    add_breadcrumb helpers.raw("#{helpers.fa_icon('list')} #{@sanction_list.name}"), [:compliance_check, @sanction_list]
  end

end
