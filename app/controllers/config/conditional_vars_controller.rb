class Config::ConditionalVarsController < ManagerController
  add_breadcrumb helpers.raw("#{helpers.fa_icon(ConditionalVar.icon)} #{ConditionalVar.model_name.human(count: 2)}"), [:config, :conditional_vars]


  def index
    @all_customers = Anagrafica.alive.count
  end

  # GET /conditional_vars/1
  # GET /conditional_vars/1.json
  def show
    add_breadcrumb @conditional_var.name, :conditional_var
  end

  # GET /conditional_vars/new
  def new
    add_breadcrumb "new", [:new, :config, :conditional_var]
    @conditional_var = ConditionalVar.new
    CustomerCategory.all.each do |customer_category|
      @conditional_var.customer_category_conditional_vars.build(customer_category_id: customer_category.id)
    end
  end

  def duplicate
    @conditional_var = @conditional_var.amoeba_dup
    render :new
  end
  # GET /conditional_vars/1/edit
  def edit
  end

  # POST /conditional_vars
  # POST /conditional_vars.json
  def create
    @conditional_var = ConditionalVar.new(conditional_var_params)
    respond_to do |format|
      if @conditional_var.save
        format.html { redirect_to [:config, @conditional_var], notice: 'ConditionalVar was successfully created.' }
        format.json { render :show, status: :created, location: @conditional_var }
      else
        format.html { render :new }
        format.json { render json: @conditional_var.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /conditional_vars/1
  # PATCH/PUT /conditional_vars/1.json
  def update
    respond_to do |format|
      if @conditional_var.update(conditional_var_params)
        format.html { redirect_to [:config, @conditional_var], notice: 'ConditionalVar was successfully updated.' }
        format.json { render :show, status: :ok, location: @conditional_var }
      else
        format.html { render :edit }
        format.json { render json: @conditional_var.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /conditional_vars/1
  # DELETE /conditional_vars/1.json
  def destroy
    @conditional_var.destroy
    respond_to do |format|
      format.html { redirect_to [:config, :conditional_vars], notice: 'ConditionalVar was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_conditional_var
      @conditional_var = ConditionalVar.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def conditional_var_params
      params.require(:conditional_var).permit(
        :default_value,
        :description,
        :name,
        customer_category_conditional_vars_attributes: [
          :id,
          :conditional_var_id,
          :customer_category_id,
          :value,
          :_destroy
        ]
      )
    end
end
#  id                   :bigint           not null, primary key
#  value                :float            not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  conditional_var_id   :bigint           not null
#  customer_category_id :bigint           not null
