module Customers
  class CustomerSettingsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @customer_settings = @anagrafica.customer_settings.order(updated_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      @customer_setting = @anagrafica.customer_settings.find(params[:id])
      add_breadcrumb "#{I18n.t(:listing_resource, resource: CustomerSetting.model_name.human(:count => 2))}: #{@anagrafica}", [:customers, @anagrafica, @customer_setting]
    end

    def new
      @customer_setting = @anagrafica.customer_settings.build
    end


    def create
      @customer_setting = @anagrafica.customer_settings.build(customer_setting_params)
      respond_to do |format|
        if @customer_setting.save
          format.html { redirect_to [:customers, @anagrafica], notice: 'CustomerSetting was successfully created.' }
          format.json { render :show, status: :created, location: @customer_setting }
          format.js
        else
          format.html { render :new }
          format.json { render json: @customer_setting.errors, status: :unprocessable_entity }
          format.js { render :new }
        end
      end
    end

    def edit
      @customer_setting = @anagrafica.customer_settings.find(params[:id])
      respond_to do |format|
        format.html
        format.js
      end
    end

    def update
      @customer_setting = @anagrafica.customer_settings.find(params[:id])
      respond_to do |format|
        if @customer_setting.update(customer_setting_params)
          format.html { redirect_to [:customers, @anagrafica], notice: 'CustomerSetting was successfully updated.' }
          format.json { render :show, status: :ok, location: @customer_setting }
          format.js
        else
          format.html { render :edit }
          format.json { render json: @customer_setting.errors, status: :unprocessable_entity }
          format.js
        end
      end
    end
  
  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('wrench')} #{CustomerSetting.model_name.human(count: 2)}"), [:customers, @anagrafica, :customer_settings]
    end

    def customer_setting_params
      params.require(:customer_setting).permit(:active, :product_id, :tollerance)
    end
  end
end



