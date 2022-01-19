module NotificationsHelper
  def render_notification(notification, css=nil)
    case notification.type
    when 'EvaluatedMovementNotification'
      "#{notification.params[:evaluated_movement]}".html_safe
    else
      notification.params
    end
  end
  
  def render_notification_short(notification, css=nil)
    case notification.type
    when 'EvaluatedMovementNotification'
      "#{link_to("#{notification.params[:evaluated_movement].to_s[0..25]} ...", [current_user, notification], class: css)}".html_safe
    else
      notification.params
    end
  end

end
