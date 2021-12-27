class DeliveryMethods::Webpush < Noticed::DeliveryMethods::Base
  def deliver
    # Logic for sending the notification
    evaluated_movement = params[:evaluated_movement]
    recipient.webpush_subscriptions.each do |sub|
      sub.publish(evaluated_movement.to_s)
    end
  end

  # You may override this method to validate options for the delivery method
  # Invalid options should raise a ValidationError
  #
  # def self.validate!(options)
  #   raise ValidationError, "required_option missing" unless options[:required_option]
  # end
end
