module MapsHelper
  def to_popup(eval_movement)
    str = "#{EvalMovement.human_attribute_name(:customer)}: #{eval_movement.customer_full_name}"
    str += "<br />"
    str += "#{EvalMovement.human_attribute_name(:beneficiary)}: #{eval_movement.beneficiary}"
    str += "<br />"
    str += "#{EvalMovement.human_attribute_name(:beneficiary_iban)}: #{eval_movement.beneficiary_iban}"
    str += "<br />"
    str += "#{EvalMovement.human_attribute_name(:amount)}: #{eval_movement.amount}"
    str += "<br />"
    str += "#{EvalMovement.human_attribute_name(:created_at)}: #{eval_movement.created_at}"
    str += "<br />"
    return str.html_safe
  end
end
