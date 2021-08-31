module ActiveStorageAttachmentExtension
  extend ActiveSupport::Concern

  included do
    connects_to database: { writing: :core_pg, reading: :core_pg }
  end
end

Rails.configuration.to_prepare do
  ActiveStorage::Record.include ActiveStorageAttachmentExtension
end
