class NotifyPrivateChannelWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # user_id, data

  def perform(user_id, data)
    current_user = User.find user_id rescue nil
    return unless user
    channel = "user_#{current_user.private_channel}"
    ActionCable.server.broadcast(channel, data)
  end

end
