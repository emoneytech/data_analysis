# == Schema Information
#
# Table name: worker_errors
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  params     :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class WorkerError < RiskRecord
end
