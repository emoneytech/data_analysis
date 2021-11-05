# == Schema Information
#
# Table name: related_countries
#
#  id               :bigint           not null, primary key
#  alpha2           :string           not null
#  alpha3           :string           not null
#  continent        :string
#  gec              :string
#  in_eea           :boolean
#  in_esm           :boolean
#  in_eu            :boolean
#  name             :string
#  region           :string
#  score            :float            default(1.0), not null
#  subregion        :string
#  unofficial_names :text             default([]), is an Array
#  world_region     :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_related_countries_on_alpha2            (alpha2) UNIQUE
#  index_related_countries_on_alpha3            (alpha3) UNIQUE
#  index_related_countries_on_continent         (continent)
#  index_related_countries_on_gec               (gec)
#  index_related_countries_on_in_eea            (in_eea)
#  index_related_countries_on_in_esm            (in_esm)
#  index_related_countries_on_in_eu             (in_eu)
#  index_related_countries_on_name              (name)
#  index_related_countries_on_region            (region)
#  index_related_countries_on_score             (score)
#  index_related_countries_on_subregion         (subregion)
#  index_related_countries_on_unofficial_names  (unofficial_names)
#  index_related_countries_on_world_region      (world_region)
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
