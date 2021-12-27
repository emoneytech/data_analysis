Rails.application.routes.default_url_options = Rails.application.config.action_mailer.default_url_options

ActionMailer::Base.delivery_method = :smtp if Rails.env.production?  
ActionMailer::Base.smtp_settings = {
  :address                => "mail.emworld.eu",
  :port                   => "465",
  :domain                 => "emoneyplc.com",
  :authentication         => :plain,
  :enable_starttls_auto   => true,
  :openssl_verify_mode    => "none",
  :user_name              => "echeque@emoneyplc.com",
  :password               => "v34gouZRKZ@05",
  :ssl                    => true,
  :tls                    => true,
}
