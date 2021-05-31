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