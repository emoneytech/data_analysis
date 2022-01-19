class NotificationsController < ManagerController
  before_action :set_notification, only: [:show, :destroy]
  add_breadcrumb helpers.raw("#{helpers.fa_icon('bell')} #{Notification.model_name.human(count: 2)}"), :user_notifications

  # GET /notifications
  # GET /notifications.json
  def index
    if params[:d]
      @notifications = Notification.unscoped.where(recipient: current_user).order(created_at: :desc).page(params[:page])
    else
      @notifications = current_user.notifications.order(created_at: :desc).page(params[:page])
    end
  end

  # GET /notifications/1
  # GET /notifications/1.json
  def show
    @notification.update!(read_at: Time.now()) if @notification.unread?
    add_breadcrumb @notification, :user_notification
  end

  # DELETE /notifications/1
  # DELETE /notifications/1.json

  def mark_all_as_readed
    @notifications = current_user.notifications.unread.update(read_at: Time.now)
    respond_to do |format|
      format.html { redirect_to [current_user, :notifications], notice: 'Notifications was successfully marked.' }
      format.json { head :no_content }
    end
  end

  def delete_readed
    @notifications = current_user.notifications.read.delete_all
    respond_to do |format|
      format.html { redirect_to [current_user, :notifications], notice: 'Notifications was successfully marked.' }
      format.json { head :no_content }
    end
  end

  def delete_all
    @notifications = current_user.notifications.delete_all
    respond_to do |format|
      format.html { redirect_to [current_user, :notifications], notice: 'Notifications was successfully marked.' }
      format.json { head :no_content }
    end
  end

  def destroy
    @notification.destroy

    n = current_user.notifications.unread.try(:last) 
    respond_to do |format|
      if n
        format.html { redirect_to [current_user, n], notice: 'Notification was successfully destroyed.' }
      else
        format.html { redirect_to user_notifications_path(current_user), notice: 'Notification was successfully destroyed.' }
      end
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = current_user.notifications.find(params[:id])
    end

end

