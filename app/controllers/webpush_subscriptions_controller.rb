class WebpushSubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  before_action :load_user, except: :create

  def index
    add_breadcrumb helpers.raw("#{helpers.fa_icon(User.icon)} #{@user.full_name}"), @user
    add_breadcrumb helpers.raw("#{helpers.fa_icon(WebpushSubscription.icon)} #{WebpushSubscription.model_name.human(count: 2)}"), user_webpush_subscriptions_path
    @webpush_subscriptions = @user.webpush_subscriptions.page(params[:page])
    # add_breadcrumb @webpush_subscription, :user_url
  end

  def show
    @webpush_subscription = @user.webpush_subscriptions.where(id: params[:id]).first
    add_breadcrumb helpers.raw("#{helpers.fa_icon(User.icon)} #{@user.full_name}"), @user
    add_breadcrumb helpers.raw("#{helpers.fa_icon(WebpushSubscription.icon)} #{WebpushSubscription.model_name.human(count: 2)}"), user_webpush_subscriptions_path
    add_breadcrumb @webpush_subscription, :user_webpush_subscription_path
  end

  def create
    subscription = current_user.webpush_subscriptions.find_by(auth_key: params[:keys][:auth])
    if !subscription
      subscription = current_user.webpush_subscriptions.build(
        endpoint: params[:endpoint],
        auth_key: params[:keys][:auth],
        p256dh_key: params[:keys][:p256dh],
        client: params[:client]
      )
    end
    if subscription.save
      render json: subscription
    else
      render json: subscription.errors.full_messages
    end
  end
  
  def destroy
    @webpush_subscription = @user.webpush_subscriptions.where(id: params[:id]).first
    respond_to do |format|
      if @webpush_subscription.destroy
        format.html { redirect_to [@user, :webpush_subscriptions], notice: 'Subscription was successfully destroyed.' }
        format.json { head :no_content }
      else
        format.html { render :show, warning: 'Operation went wrong.' }
        format.json { render json: @webpush_subscription.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def load_user
    @user = User.find(params[:user_id])
  end

end

