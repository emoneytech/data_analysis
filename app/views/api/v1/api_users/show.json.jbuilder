json.api_user do |json|
  json.partial! 'api/v1/api_users/api_user', api_user: current_user
end
