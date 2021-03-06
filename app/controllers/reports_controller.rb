class ReportsController < DataAnalysisController
  load_and_authorize_resource :user
  add_breadcrumb helpers.raw("#{helpers.fa_icon(Report.icon)} #{Report.model_name.human(count: 2)}"), :user_reports

  def index
    @reports = @user.reports.page(params[:page])
  end

  def show
    add_breadcrumb @report.name.humanize, :user_report
  end

  def edit
    add_breadcrumb @report.name.humanize, :edit_user_report
  end

  def new
    @report = current_user.reports.build(opts: {table: 'servizi'})
    add_breadcrumb I18n.t(:add_resource, resource: Report.model_name.human), :edit_user_report
  end
  
  def create
    @report = current_user.reports.build(report_params)
    respond_to do |format|
      if @report.save
        format.html { redirect_to [current_user, @report], notice: 'Report was successfully created.' }
        format.json { render :show, status: :created, location: [current_user, @report] }
      else
        format.html { render :new }
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end
    end
  end

  def download
    redirect_to rails_blob_path(@report.xls_file, disposition: "attachment")
  end

  def destroy
    @report.destroy
    respond_to do |format|
      format.html { redirect_to [:user, :reports], notice: 'Report was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
private

  # Never trust parameters from the scary internet, only allow the white list through.
  def report_params
    params.require(:report).permit(:name, opts: {})
  end
end
