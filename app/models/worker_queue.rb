# == Schema Information
#
# Table name: worker_queues
#
#  id          :bigint           not null, primary key
#  service_id  :integer          not null
#  last_update :datetime         not null
#
class WorkerQueue < RiskRecord
end
