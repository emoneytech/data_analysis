class NotifyWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # type, content

  def perform(icon, content)
    ActionCable.server.broadcast("notification_channel", {icon: icon, content: "#{content}"})
  end

end
