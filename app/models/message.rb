class Message < CorePgRecord
end

# == Schema Information
#
# Table name: messages
#
#  id         :uuid             not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
