class JobWorkerErrors < StandardError
  attr_reader :opt

  def initialize(msg="Default msg Job Worker Error", error="default error", opt="default opt")
    WorkerError.create(name: msg, error: error, params: param)
    super(msg)
  end
end
