# frozen_string_literal: true

require 'net/http'
module IbanCheck
  class << self

    def validate_iban(iban='MT28EMON02015000092066500001763')
      result = Net::HTTP.post_form(
        URI(ENV['IC_API_URL']),
        "format" => "json",
        "user_email" => ENV['IC_API_USER'],
        "user_token" => ENV['IC_API_KEY'],
        "iban[iban]" => iban
      )
      return JSON.parse(result.body)
    end

  end
end
