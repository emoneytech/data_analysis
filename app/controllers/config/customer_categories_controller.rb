class Config::CustomerCategoriesController < ManagerController
  add_breadcrumb helpers.raw(
                  "#{helpers.fa_icon(CustomerCategory.icon)} #{CustomerCategory.model_name.human(count: 2)}",
                ),
                [:config, :customer_categories]

  def index
    @all_customers = Anagrafica.alive.count
  end

  # GET /customer_categories/1
  # GET /customer_categories/1.json
  def show
    add_breadcrumb @customer_category.name, [:config, :customer_category]
  end

  # GET /customer_categories/new
  def new
    @customer_category = CustomerCategory.new
  end

  # GET /customer_categories/1/edit
  def edit
  end

  # POST /customer_categories
  # POST /customer_categories.json
  def create
    @customer_category = CustomerCategory.new(customer_category_params)

    respond_to do |format|
      if @customer_category.save
        format.html { redirect_to [:config, @customer_category], notice: 'CustomerCategory was successfully created.' }
        format.json { render :show, status: :created, location: [:config, @customer_category] }
      else
        format.html { render :new }
        format.json { render json: @customer_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /customer_categories/1
  # PATCH/PUT /customer_categories/1.json
  def update
    respond_to do |format|
      if @customer_category.update(customer_category_params)
        format.html { redirect_to [:config, @customer_category], notice: 'CustomerCategory was successfully updated.' }
        format.json { render :show, status: :ok, location: [:config, @customer_category] }
      else
        format.html { render :edit }
        format.json { render json: @customer_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customer_categories/1
  # DELETE /customer_categories/1.json
  def destroy
    @customer_category.destroy
    respond_to do |format|
      format.html { redirect_to config_customer_categories_url, notice: 'CustomerCategory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer_category
      @customer_category = CustomerCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def customer_category_params
      params.require(:customer_category).permit(:name, :base_risk, :default)
    end
end

