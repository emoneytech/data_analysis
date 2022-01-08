module ActionControllerParameters
  def filtered
    filter_hash self.to_unsafe_hash
  end

  private

  def filterer
    @filterer ||= ActiveSupport::ParameterFilter.new(Rails.application.config.filter_parameters)
  end

  def filter_array(array)
    array.map do |item|
      case item
      when Array then filter_array(item)
      when Hash then filter_hash(item)
      else item
      end
    end
  end

  def filter_hash(hash)
    hash.each do |key, value|
      case value
      when Array then hash[key] = filter_array(value)
      when Hash then hash[key] = filter_hash(value)
      end
    end
    filterer.filter hash
  end
end

::ActionController::Parameters.send :include, ::ActionControllerParameters