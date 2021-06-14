class PurgeForExcludedProductsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  sidekiq_options queue: 'critical'

  def perform()
    Prodotto.da_escludere_per_prodottoid.each do |product_id|
      EvaluatedMovement.where(
        "SUBSTRING(product_id, -3, 3) IN (?)", product_id
      ).destroy_all
    end
  end

end

