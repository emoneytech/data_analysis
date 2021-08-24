module ComplianceCheck
  class SanctionListItemsController < ComplianceCheckController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('user-check')} #{SanctionListItem.model_name.human(count: 2)}"), [:compliance_check, :sanction_list, :sanction_list_items]

    def index
      @sanction_list_items = @sanction_list.sanction_list_items.page(params[:page])
    end

    def show
      @sanction_list_item = @sanction_list.sanction_list_items.where(id: params[:id]).first
      add_breadcrumb @sanction_list_item.id, [:compliance_check, :sanction_list, :sanction_list_item]
    end

    def search
      @sanction_list_items = @sanction_list.sanction_list_items.name_similar(filtering_params[:name]).page(params[:page])
      render 'index'
    end

  private

    # Never trust parameters from the scary internet, only allow the white list through.

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :name
      ).permit! : {}
    end
  end
end
