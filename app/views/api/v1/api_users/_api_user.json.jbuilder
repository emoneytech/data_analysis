
json.(api_user, :id, :email, :username)
json.token api_user.generate_jwt
