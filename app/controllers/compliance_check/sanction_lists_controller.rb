module ComplianceCheck
  class SanctionListsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('user-check')} #{SanctionList.model_name.human(count: 2)}"), [:compliance_check, :sanction_lists]
    
    def index
      @sanction_lists = @sanction_lists.page(params[:page])
    end

    def show
      add_breadcrumb @sanction_list.name, :compliance_check_sanction_list
    end

    def new
      add_breadcrumb helpers.raw("#{helpers.t(:add_resource, resource: SanctionList.model_name.human)}"), [:new, :compliance_check, :sanction_list]
    end

    def edit
    end

    def create
      @sanction_list = SanctionList.new(sanction_list_params)
      respond_to do |format|
        if @sanction_list.save
          format.html { redirect_to [:compliance_check, @sanction_list], notice: 'SanctionList was successfully created.' }
          format.json { render :show, status: :created, location: [:compliance_check, @sanction_list] }
        else
          format.html { render :new }
          format.json { render json: @sanction_list.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /sanction_lists/1
    # PATCH/PUT /sanction_lists/1.json
    def update
      respond_to do |format|
        if @sanction_list.update(sanction_list_params)
          format.html { redirect_to [:compliance_check, @sanction_list], notice: 'SanctionList was successfully updated.' }
          format.json { render :show, status: :ok, location: [:compliance_check, @sanction_list] }
        else
          format.html { render :edit }
          format.json { render json: @sanction_list.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @sanction_list.destroy
      respond_to do |format|
        format.html { redirect_to [:compliance_check, :sanction_lists], notice: 'SanctionList was successfully destroyed.' }
        format.json { head :no_content }
      end
    end


    def import
      ImportCsvSanctionListWorker.perform_async(@sanction_list.id, params[:file])
      redirect_to [:compliance_check, @sanction_list]
    end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def sanction_list_params
      params.require(:sanction_list).permit(:name)
    end

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :ragione_sociale
      ).permit! : {}
    end
  end
end
