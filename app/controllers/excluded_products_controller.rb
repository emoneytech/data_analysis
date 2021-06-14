class ExcludedProductsController < ManagerController
  add_breadcrumb ExcludedProduct.model_name.human(count: 2), :data_analysis_excluded_products_path
  # GET /excluded_products
  # GET /excluded_products.json
  def index
    @excluded_products = ExcludedProduct.all
  end

  # GET /excluded_products/new
  def new
    @excluded_product = ExcludedProduct.new
  end

  def add_multiple
    all_products
    @excluded_product = ExcludedProduct.new
  end

  # POST /excluded_products
  # POST /excluded_products.json
  def create
    @excluded_product = ExcludedProduct.new(excluded_product_params)
    respond_to do |format|
      if @excluded_product.save
        format.html { redirect_to @excluded_product, notice: 'ExcludedProduct was successfully created.' }
        format.json { render :show, status: :created, location: @excluded_product }
      else
        all_products
        format.html { render :new }
        format.json { render json: @excluded_product.errors, status: :unprocessable_entity }
      end
    end
  end

  def create_multiple
    excluded_products = []
    create_multiple_params[:names].each do |str|
      last_3_numbers = str["_helper2"].split('-')[0]
      product_name = str["_helper2"].split('-')[1]
      excluded_products << ExcludedProduct.new(last_3_numbers: last_3_numbers, name: product_name)
    end
    respond_to do |format|
      if excluded_products.each{|ep| ep.save} 
        format.html { redirect_to excluded_products_path, notice: 'ExcludedProduct was successfully created.' }
        format.json { render :show, status: :created, location: @excluded_product }
      else
        @all_products = Servizio.select(:prodotto, :nomeprodotto).distinct
        format.html { render :new }
        format.json { render json: @excluded_product.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def all_products
      @all_products = Servizio.select(
        :prodotto, :nomeprodotto
      ).where.not(
        "SUBSTRING(prodotto, -3, 3) IN (?)", ExcludedProduct.all.pluck(:last_3_numbers)
      ).distinct
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def excluded_product_params
      params.require(:excluded_product).permit(:name, :last_3_numbers)
    end
    
    def create_multiple_params
      params.require(:create_multiple).permit(:names => [:_helper2])
    end
end

