class SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session

  def create
    api_user = ApiUser.find_by_username(sign_in_params[:username])
    if api_user && api_user.valid_password?(sign_in_params[:password])
      @current_api_user = api_user
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  private

  def sign_in_params
    params.require(:login).permit(:username, :password)
  end

end