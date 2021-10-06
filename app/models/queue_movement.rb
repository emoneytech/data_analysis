# == Schema Information
#
# Table name: queue_movements
#
#  id          :bigint           not null, primary key
#  movement_id :integer          not null
#  last_update :datetime         not null
#
class QueueMovement < RiskRecord
end
