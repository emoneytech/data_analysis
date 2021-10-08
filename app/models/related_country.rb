# == Schema Information
#
# Table name: related_countries
#
#  id               :bigint           not null, primary key
#  continent        :string
#  region           :string
#  subregion        :string
#  name             :string
#  unofficial_names :text             default([]), is an Array
#  gec              :string
#  alpha2           :string           not null
#  alpha3           :string           not null
#  world_region     :string
#  in_eu            :boolean
#  in_eea           :boolean
#  in_esm           :boolean
#  score            :float            default(1.0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class RelatedCountry < CorePgRecord

  validates :score, numericality: { greater_than_or_equal_to: 1.0 }
  
  def previous
    self.class.unscoped.where('alpha2 < ?', alpha2).order('alpha2 DESC').first
  end
  
  def next
    self.class.unscoped.where('alpha2 > ?', alpha2).order('alpha2 ASC').first
  end


end
