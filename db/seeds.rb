# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ISO3166::Country.countries.each do |item|
  RelatedCountry.where(
    continent: item.continent,
    region: item.region,
    subregion: item.subregion,
    name: item.name,
    unofficial_names: item.unofficial_names,
    gec: item.gec,
    alpha2: item.alpha2,
    alpha3: item.alpha3,
    world_region: item.world_region,
    in_eu: item.in_eu?,
    in_eea: item.in_eea?,
    in_esm: item.in_esm?,
    iso_numeric: item.number
  ).first_or_create
end
