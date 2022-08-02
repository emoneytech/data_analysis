# == Schema Information
#
# Table name: related_countries
#
#  id                         :bigint           not null, primary key
#  alpha2                     :string           not null
#  alpha3                     :string           not null
#  attention_factor           :float
#  basel_score                :float
#  continent                  :string
#  corruption_perception      :float
#  eval_basel_score           :float
#  eval_corruption_perception :float
#  eval_kyc_score             :float
#  gec                        :string
#  gray_or_black_list         :integer
#  in_eea                     :boolean
#  in_esm                     :boolean
#  in_eu                      :boolean
#  iso_numeric                :integer
#  kyc_score                  :float
#  name                       :string
#  region                     :string
#  subregion                  :string
#  unofficial_names           :text             default([]), is an Array
#  world_region               :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#
# Indexes
#
#  index_related_countries_on_alpha2                 (alpha2) UNIQUE
#  index_related_countries_on_alpha3                 (alpha3) UNIQUE
#  index_related_countries_on_attention_factor       (attention_factor)
#  index_related_countries_on_basel_score            (basel_score)
#  index_related_countries_on_continent              (continent)
#  index_related_countries_on_corruption_perception  (corruption_perception)
#  index_related_countries_on_gec                    (gec)
#  index_related_countries_on_gray_or_black_list     (gray_or_black_list)
#  index_related_countries_on_in_eea                 (in_eea)
#  index_related_countries_on_in_esm                 (in_esm)
#  index_related_countries_on_in_eu                  (in_eu)
#  index_related_countries_on_iso_numeric            (iso_numeric)
#  index_related_countries_on_kyc_score              (kyc_score)
#  index_related_countries_on_name                   (name)
#  index_related_countries_on_region                 (region)
#  index_related_countries_on_subregion              (subregion)
#  index_related_countries_on_unofficial_names       (unofficial_names)
#  index_related_countries_on_world_region           (world_region)
#
class RelatedCountry < CorePgRecord
  audited comment_required: true

  validates :audit_comment, presence: true

  validates :basel_score,
            :corruption_perception,
            :gray_or_black_list,
            :kyc_score,
            presence: true,
            numericality: true
  after_validation :set_evaluated_fields
  has_many :comments

  scope :filter_by_name, ->(name) { where('name ilike ?', "%#{name}%") }
  scope :ordered, -> { order(alpha2: :asc, alpha3: :asc) }

  def previous
    self.class.unscoped.where('alpha2 < ?', alpha2).order('alpha2 DESC').first
  end

  def next
    self.class.unscoped.where('alpha2 > ?', alpha2).order('alpha2 ASC').first
  end

  def as_json
    { id: id, text: "#{name}" }
  end

  private

  def set_evaluated_fields
    if self.kyc_score
      self.eval_kyc_score =
        ((100 - self.kyc_score) * (1.to_f / self.kyc_score)) + 1
      self.eval_basel_score = (self.basel_score.to_f / 100) + 1
      self.eval_corruption_perception =
        (100 - self.corruption_perception) *
          (1.to_f / self.corruption_perception) + 1
      self.attention_factor =
        (
          (
            (
              (
                (
                  self.eval_kyc_score + self.eval_basel_score +
                    self.eval_corruption_perception
                ).to_f / 3
              ) - 1
            ).to_f / 2
          ) + 1
        ) + (self.gray_or_black_list.to_f / 2)
    end
  end
end
