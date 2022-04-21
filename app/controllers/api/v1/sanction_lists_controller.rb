class Api::V1::SanctionListsController < ApiController
  before_action :authenticate_user!

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

