class PurgeForExcludedProductsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  sidekiq_options queue: 'critical', retry: false, backtrace: true

  def perform()
    ExcludedProduct.all.pluck(:last_3_numbers).each do |product_id|
      EvalMovement.where(
        "SUBSTRING(product_id, -3, 3) IN (?)", product_id
      ).destroy_all
    end
  end

end

