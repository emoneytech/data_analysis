class WebpushSubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    subscription = current_user.webpush_subscriptions.find_by(auth_key: params[:keys][:auth])
    if !subscription
      subscription = current_user.webpush_subscriptions.build(
        endpoint: params[:endpoint],
        auth_key: params[:keys][:auth],
        p256dh_key: params[:keys][:p256dh]    
      )
    end
    if subscription.save
      render json: subscription
    else
      render json: subscription.errors.full_messages
    end
  end
  
end

