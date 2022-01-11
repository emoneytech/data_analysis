class ConfigurablesController < ApplicationController
  add_breadcrumb helpers.raw("#{helpers.fa_icon('cogs')} #{Configurable.model_name.human(count: 2)}"), [:configurables]
  include ConfigurableEngine::ConfigurablesControllerMethods
  before_action :set_configurable, only: [:show, :edit, :update, :destroy]

  layout 'application'
  def index
    @configurables = (Configurable.all.size > 0 ? Configurable.all : []) +
    (Configurable.defaults.keys - Configurable.all.collect { |c| c.name })
  end

  def show
    add_breadcrumb I18n.t(@configurable.name, default: Configurable.defaults[@configurable.name][:name]), :data_analysisconfigurable_path
  end

  def edit
    new = params[:new]
  end

  def new
    respond_to do |format|
      name = params[:name]
        if name
          @configurable = Configurable.new(name: name, value: nil)
            if @configurable.save
              format.html { redirect_to edit_configurable_path(@configurable, new: true), notice: 'The setting was successfully created.' }
            else
              format.html { redirect_to configurables_url, error: 'Failed to create the setting.' }
            end
        else
          format.html { redirect_to configurables_url, notice: 'The name of the new setting was not specified.' }
        end
    end
  end

  def update
    respond_to do |format|
      if @configurable.update(configurable_params)
        format.html { redirect_to @configurable, notice: 'The setting was successfully updated.' }
        format.json { render :show, status: :ok, location: @configurable }
      else
        format.html { render :edit }
        format.json { render json: @configurable.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @configurable.destroy
    respond_to do |format|
      format.html { redirect_to configurables_url, notice: 'The setting was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

private

  def set_configurable
    @configurable = Configurable.find(params[:id])
  end

  def set_breadcrumb
    #add_breadcrumb Configurable.model_name.human(count: 2), :data_analysisconfigurables_path
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def configurable_params
    params.require(:configurable).permit(:name, :value)
  end


end
