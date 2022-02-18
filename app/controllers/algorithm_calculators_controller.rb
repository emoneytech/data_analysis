class AlgorithmCalculatorsController < ManagerController
  add_breadcrumb helpers.raw(
                  "#{helpers.fa_icon(AlgorithmCalculator.icon)} #{AlgorithmCalculator.model_name.human(count: 2)}",
                ),
                :algorithm_calculators

  def index
  end

  # GET /algorithm_calculators/1
  # GET /algorithm_calculators/1.json
  def show
    add_breadcrumb @algorithm_calculator.presentation, :algorithm_calculator
  end

  # GET /algorithm_calculators/new
  def new
    @algorithm_calculator = AlgorithmCalculator.new
  end

  # GET /algorithm_calculators/1/edit
  def edit
  end

  # POST /algorithm_calculators
  # POST /algorithm_calculators.json
  def create
    @algorithm_calculator = AlgorithmCalculator.new(algorithm_calculator_params)

    respond_to do |format|
      if @algorithm_calculator.save
        format.html { redirect_to @algorithm_calculator, notice: 'AlgorithmCalculator was successfully created.' }
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
        format.html { redirect_to @algorithm_calculator, notice: 'AlgorithmCalculator was successfully updated.' }
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
      format.html { redirect_to algorithm_calculators_url, notice: 'AlgorithmCalculator was successfully destroyed.' }
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
        :result_type,
        :value, 
        :customer_category_id,
        :presentation,
        :abscissa,
        :abscissa_min,
        :abscissa_max,
        :abscissa_intervall
      )
    end
end

