module DataAnalysis
  class CheckIbansController < ApplicationController
    before_action(only: :index) { authorize! :manage, :check_ibans }

    def index
      if params[:filter] && filtering_params[:iban] != ""
        iban = IBANTools::IBAN.new(filtering_params[:iban])
        unless iban.validation_errors.any?
           @iban_info = IbanCheck.validate_iban(iban.code)
        else
          @iban_info = iban.validation_errors
        end
      end
      # @iban_info = {"bank_data"=>{"bic"=>"EMONMTM2XXX", "branch"=>"SLIEMA", "bank"=>"EMONEY PLC.", "address"=>"REGENT HOUSE FLAT 45 BISAZZA STREET", "city"=>"SLIEMA", "state"=>nil, "zip"=>"SLM 1640", "phone"=>nil, "fax"=>nil, "www"=>nil, "email"=>nil, "country"=>"Malta", "country_iso"=>"MT", "account"=>"000009000100041301", "bank_code"=>"EMON", "branch_code"=>"02015"}, "sepa_data"=>{"SCT"=>"YES", "SDD"=>"NO", "COR1"=>"NO", "B2B"=>"NO", "SCC"=>"NO"}, "validations"=>{"chars"=>{"code"=>"006", "message"=>"IBAN does not contain illegal characters"}, "account"=>{"code"=>"004", "message"=>"Account Number check digit is not performed for this bank or branch"}, "iban"=>{"code"=>"001", "message"=>"IBAN Check digit is correct"}, "structure"=>{"code"=>"005", "message"=>"IBAN structure is correct"}, "length"=>{"code"=>"003", "message"=>"IBAN Length is correct"}, "country_support"=>{"code"=>"007", "message"=>"Country supports IBAN standard"}}, "errors"=>[]}
    end
  private
    def filtering_params
      params[:filter] ? params[:filter].slice(
        :iban
      ).permit! : {}
    end
  end
end
