class NotifyWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # type, content, coords

  def perform(icon, content, coords)
    ActionCable.server.broadcast("notification_channel", {icon: icon, content: "#{content}", coords: coords})
  end

end
