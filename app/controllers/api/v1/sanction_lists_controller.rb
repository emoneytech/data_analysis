class Api::V1::SanctionListsController < ApiController
  before_action :authenticate_user!

  swagger_controller :sanction_lists, 'SanctionLists'

  swagger_api :index do
    summary 'Returns all Sanction Lists'
    notes 'Notes: the "Search" function analyzes all the lists.'
  end

  swagger_api :search do
    summary "Search for Name in All Sanction Lists"
    param :form, "filter[name]", :string, :required, "Name"
    response :ok, "Success", :Result
    response :unauthorized
    response :not_acceptable
    response :not_found
  end

  def index
    @sanction_lists = SanctionList.all
  end

  def show
  end
  
  def search
    @items = SanctionListItem.name_similar(filtering_params[:name]).with_pg_search_rank
  end

  private
  
  def filtering_params
    params[:filter] ? params[:filter].slice(
      :name
    ).permit! : {}
  end
end

