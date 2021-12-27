# To deliver this notification:
#
# EvaluatedMovementNotification.with(post: @post).deliver_later(current_user)
# EvaluatedMovementNotification.with(post: @post).deliver(current_user)
# model EvaluatedMovement 

# ObservedElement
# category_element: eval(iban notified_user customer_id country)
# content: string
# user: references
# audit_comment: references
# deleted_at: datetime

# il movimento ha superato l'importo di attenzione alert_attention_amount: float(32)
# il movimento ha superato la soglia di attenzione delle recorsività alert_attention_recursions: smallint

# il movimento ha destinazione o provenienza da paese con fattore di attenzione superiore a alert_country_attention_factor: float(32)
# il movimento ha destinazione o provenienza da utente in sanction list
# il movimento interseca la tabella ObservedObject

class EvaluatedMovementNotification < Noticed::Base
  # Add your delivery methods
  #
  deliver_by :database
  deliver_by :email, mailer: "EvaluatedMovementMailer"
  deliver_by :webpush, class: "DeliveryMethods::Webpush"
  # deliver_by :slack
  # deliver_by :custom, class: "MyDeliveryMethod"

  # Add required params
  #
  param :evaluated_movement

  # Define helper methods to make rendering easier.
  #
  # def message
  #   t(".message")
  # end
  #
  # def url
  #   post_path(params[:post])
  # end
end
