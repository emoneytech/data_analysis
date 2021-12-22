class EvaluatedMovementMailer < ApplicationMailer
   def evaluated_movement_notification(*args)
    puts "Evaluated Movement in the mailer #{args}"
    mail(to: "hello@emoney.tech", subject: 'Movement Evaluated')
  end
end
