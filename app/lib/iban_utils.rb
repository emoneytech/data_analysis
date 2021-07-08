# frozen_string_literal: true

require 'net/http'
module IbanUtils
  class << self

    def validate_iban(iban='MT28EMON02015000092066500001763')
      result = Net::HTTP.post_form(URI(ENV['IBAN_API_URL']), "format" => "json", "api_key" => ENV['IBAN_API_KEY'], "iban" => iban)
      return JSON.parse(result.body)
    end

  end
end
