class Config::AlgorithmCalculatorsController < ManagerController
  add_breadcrumb helpers.raw(
                  "#{helpers.fa_icon(AlgorithmCalculator.icon)} #{AlgorithmCalculator.model_name.human(count: 2)}",
                ),
                [:config, :algorithm_calculators]

  def index
  end

  # GET /algorithm_calculators/1
  # GET /algorithm_calculators/1.json
  def show
    add_breadcrumb @algorithm_calculator.presentation, :algorithm_calculator
  end

  # GET /algorithm_calculators/new
  def new
    add_breadcrumb 'New', [:config, :algorithm_calculator]
    @algorithm_calculator = AlgorithmCalculator.new
  end

  def duplicate
    @algorithm_calculator = @algorithm_calculator.amoeba_dup
    render :new
  end

  # GET /algorithm_calculators/1/edit
  def edit
    add_breadcrumb @algorithm_calculator.presentation, [:config, :algorithm_calculator]
    add_breadcrumb I18n.t(:edit_resource, resource: AlgorithmCalculator.model_name.human), [:edit, :config, :algorithm_calculator]

  end

  # POST /algorithm_calculators
  # POST /algorithm_calculators.json
  def create
    @algorithm_calculator = AlgorithmCalculator.new(algorithm_calculator_params)

    respond_to do |format|
      if @algorithm_calculator.save
        format.html { redirect_to [:config, @algorithm_calculator], notice: 'AlgorithmCalculator was successfully created.' }
        format.json { render :show, status: :created, location: @algorithm_calculator }
      else
        format.html { render :new }
        format.json { render json: @algorithm_calculator.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /algorithm_calculators/1
  # PATCH/PUT /algorithm_calculators/1.json
  def update
    respond_to do |format|
      if @algorithm_calculator.update(algorithm_calculator_params)
        format.html { redirect_to [:config, @algorithm_calculator], notice: 'AlgorithmCalculator was successfully updated.' }
        format.json { render :show, status: :ok, location: @algorithm_calculator }
      else
        format.html { render :edit }
        format.json { render json: @algorithm_calculator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /algorithm_calculators/1
  # DELETE /algorithm_calculators/1.json
  def destroy
    @algorithm_calculator.destroy
    respond_to do |format|
      format.html { redirect_to config_algorithm_calculators_url, notice: 'AlgorithmCalculator was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_algorithm_calculator
      @algorithm_calculator = AlgorithmCalculator.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def algorithm_calculator_params
      params.require(:algorithm_calculator).permit(
        :name,
        :multidimension,
        :conditional,
        :result_type,
        :value, 
        :presentation,
        :abscissa,
        :abscissa_min,
        :abscissa_max,
        :abscissa_intervall,
        conditional_var_ids: []
      )
    end
end

