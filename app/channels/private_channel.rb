class PrivateChannel < ApplicationCable::Channel

  def subscribed
    stream_from "user_#{current_user.private_channel}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
