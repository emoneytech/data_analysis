class NotificationsController < ManagerController
  before_action :set_notification, only: [:show, :destroy]
  add_breadcrumb helpers.raw("#{helpers.fa_icon('bell')} #{Notification.model_name.human(count: 2)}"), :notifications

  # GET /notifications
  # GET /notifications.json
  def index
    @notifications = current_user.notifications.order(created_at: :desc).page(params[:page])
  end

  # GET /notifications/1
  # GET /notifications/1.json
  def show
    @notification.update!(read_at: Time.now()) if @notification.unread?
    add_breadcrumb @notification, :notification
  end

  # DELETE /notifications/1
  # DELETE /notifications/1.json
  def destroy
    @notification.destroy
    respond_to do |format|
      format.html { redirect_to notifications_url, notice: 'Notification was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = current_user.notifications.find(params[:id])
    end

end

