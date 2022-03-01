class Config::AlgorithmsController < ManagerController
  add_breadcrumb helpers.raw(
                  "#{helpers.fa_icon(Algorithm.icon)} #{Algorithm.model_name.human(count: 2)}",
                ),
                [:config, :algorithms]

  def index
  end

  # GET /algorithms/1
  # GET /algorithms/1.json
  def show
    add_breadcrumb @algorithm.presentation, :algorithm
  end

  # GET /algorithms/new
  def new
    add_breadcrumb 'New', [:config, :algorithm]
    @algorithm = Algorithm.new
  end


  # GET /algorithms/1/duplicate
  # GET /algorithms/1/duplicate.json
  def duplicate
    @algorithm = @algorithm.amoeba_dup
    render :new
  end

  # POST /algorithms/1/calculate
  # POST /algorithms/1/calculate.json
  def calculate
    binding.pry
  end

  # GET /algorithms/1/edit
  def edit
    add_breadcrumb @algorithm.presentation, [:config, :algorithm]
    add_breadcrumb I18n.t(:edit_resource, resource: Algorithm.model_name.human), [:edit, :config, :algorithm]

  end

  # POST /algorithms
  # POST /algorithms.json
  def create
    @algorithm = Algorithm.new(algorithm_params)

    respond_to do |format|
      if @algorithm.save
        format.html { redirect_to [:config, @algorithm], notice: 'Algorithm was successfully created.' }
        format.json { render :show, status: :created, location: @algorithm }
      else
        format.html { render :new }
        format.json { render json: @algorithm.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /algorithms/1
  # PATCH/PUT /algorithms/1.json
  def update
    respond_to do |format|
      if @algorithm.update(algorithm_params)
        format.html { redirect_to [:config, @algorithm], notice: 'Algorithm was successfully updated.' }
        format.json { render :show, status: :ok, location: @algorithm }
      else
        format.html { render :edit }
        format.json { render json: @algorithm.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /algorithms/1
  # DELETE /algorithms/1.json
  def destroy
    @algorithm.destroy
    respond_to do |format|
      format.html { redirect_to config_algorithms_url, notice: 'Algorithm was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_algorithm
      @algorithm = Algorithm.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def algorithm_params
      params.require(:algorithm).permit(
        :name,
        :presentation,
        :default,
        :eq,
        algorithm_algorithm_calculators_attributes: [
          :id,
          :abscissa,
          :algorithm_calculator_id,
          :algorithm_id,
          :_destroy
        ]
      )
    end
end

