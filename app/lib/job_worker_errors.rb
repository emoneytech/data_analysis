class JobWorkerErrors < StandardError
  attr_reader :opt

  def initialize(msg="Default msg Job Worker Error", opt="default opt")
    WorkerError.create(name: msg, params: opt)
    @opt = "input msg: #{opt}"
    super(msg)
  end
end
