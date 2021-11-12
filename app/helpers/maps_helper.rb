module MapsHelper
  def to_popup(evaluated_movement)
    str = "#{EvaluatedMovement.human_attribute_name(:customer)}: #{evaluated_movement.customer_full_name}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:beneficiary)}: #{evaluated_movement.beneficiary}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:beneficiary_iban)}: #{evaluated_movement.beneficiary_iban}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:amount)}: #{evaluated_movement.amount}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:created_at)}: #{evaluated_movement.created_at}"
    str += "<br />"
    return str.html_safe
  end

  def to_popup_em(evaluated_movement)
    str = "#{EvaluatedMovement.human_attribute_name(:payer)}: #{evaluated_movement.payer}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:beneficiary)}: #{evaluated_movement.beneficiary}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:beneficiary_iban)}: #{evaluated_movement.beneficiary_iban}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:amount)}: #{evaluated_movement.amount}"
    str += "<br />"
    str += "#{EvaluatedMovement.human_attribute_name(:created_at)}: #{evaluated_movement.created_at}"
    str += "<br />"
    return str.html_safe
  end

end
