class ComplianceCheck::SanctionListItemsController < ComplianceCheckController
  add_breadcrumb helpers.raw("#{helpers.fa_icon('user-check')} #{SanctionListItem.model_name.human(count: 2)}"), [:compliance_check, :sanction_list, :sanction_list_items]

  def index
    @sanction_list_items = @sanction_list.sanction_list_items.order(name_alias_whole_name: :asc).page(params[:page])
  end

  def show
    @sanction_list_item = @sanction_list.sanction_list_items.where(id: params[:id]).first
    add_breadcrumb @sanction_list_item.id, [:compliance_check, :sanction_list, :sanction_list_item]
  end

  def create
    @sanction_list_item = @sanction_list.sanction_list_items.build(sanction_list_item_params)
    respond_to do |format|
      if @sanction_list_item.save
        format.html { redirect_to [:compliance_check, @sanction_list], notice: 'Role was successfully created.' }
        format.json { render :show, status: :created, location: [:compliance_check, @sanction_list, sanction_list_item] }
      else
        format.html { render :new }
        format.json { render json: @sanction_list_item.errors, status: :unprocessable_entity }
      end
    end
  end


  def search
    @sanction_list_items = SanctionListItem.name_similar(filtering_params[:name]).with_pg_search_rank
  end

private

  # Never trust parameters from the scary internet, only allow the white list through.
  def sanction_list_item_params
    params.require(:sanction_list_item).permit(
      :name_alias_first_name,
      :name_alias_middle_name,
      :name_alias_whole_name
    )
  end

  def filtering_params
    params[:filter] ? params[:filter].slice(
      :name
    ).permit! : {}
  end
end

