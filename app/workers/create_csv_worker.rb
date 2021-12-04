class CreateCsvWorker
  include Sidekiq::Worker
  sidekiq_options retry: true

  def perform(date = Date.today - 3.days)

    require 'csv'
    file = "#{Rails.root}/public/map/#{date}.csv"

    items = Servizio.all.where("datainserimento between ? and ?", date, date + 1.day).order(idservizio: :desc)
    headers = Servizio.titles
    CSV.open(file, 'w', write_headers: true, headers: headers) do |writer|
      items.each do |item|
        writer << item.to_csv 
      end
    end



  end
end

headers = %w(iso2,iso3,kyc_score,eval_kyc_score,basel_score,eval_basel_score,corruption_perception,eval_corruption_perception,gray_or_black_list,attention_factor)

require 'csv'
filename = "#{Rails.root}/countries.csv"
countries = CSV.parse(File.read(filename), headers: true)

countries.each do |country|
  r = RelatedCountry.where(alpha2: country[0], alpha3: country[1])
  r.update(
    kyc_score: country[2],
    eval_kyc_score: country[3],
    basel_score: country[4],
    eval_basel_score: country[5],
    corruption_perception: country[6],
    eval_corruption_perception: country[7],
    gray_or_black_list: country[8],
    attention_factor: country[9]
  )
end