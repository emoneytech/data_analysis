class NotifyRoomChannelWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # type, content, coords

  def perform(data)
    ActionCable.server.broadcast("room_channel", data)
  end

end
