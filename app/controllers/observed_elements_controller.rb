class ObservedElementsController < ManagerController
  before_action :set_observed_element, only: [:show, :destroy]
  add_breadcrumb helpers.raw("#{helpers.fa_icon(ObservedElement.icon)} #{ObservedElement.model_name.human(count: 2)}"), :observed_elements

  # GET /observed_element
  # GET /observed_element.json
  def index
    @observed_elements = @observed_elements.page(params[:page])
  end

  # GET /observed_element/1
  # GET /observed_element/1.json
  def show
    add_breadcrumb @observed_element.category_element, :observed_element
  end


  def create
    @observed_element = ObservedElement.new(observed_element_params)
    respond_to do |format|
      if @observed_element.save
        format.html { redirect_to @observed_element, notice: 'Observed Element was successfully created.' }
        format.json { render :show, status: :created, location: @observed_element }
      else
        format.html { render :new }
        format.json { render json: @observed_element.errors, status: :unprocessable_entity }
      end
    end
  end

  def autocomplete
    case params[:target]
    when 'customer_id'
      result = Anagrafica.filter_by_full_name(params[:search]).alive.active
    when 'country'
      result = RelatedCountry.filter_by_name(params[:search])
    end
    render json: result.as_json
  end

  # DELETE /observed_element/1
  # DELETE /observed_element/1.json
  def destroy
    @observed_element.audit_comment = observed_element_params[:audit_comment] if observed_element_params[:audit_comment] 
    respond_to do |format|
      if @observed_element.destroy
        format.html { redirect_to observed_elements_url, notice: 'Observed Element was successfully destroyed.' }
        format.json { head :no_content }
      else
        format.html { redirect_to @observed_element, error: 'Observed Element was not destroyed.' }
        format.json { render json: @observed_element.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_observed_element
      @observed_element = ObservedElement.find(params[:id])
    end
    
    def observed_element_params
      params.require(:observed_element).permit(
        :category_element,
        :content,
        :audit_comment
      )
    end
end

