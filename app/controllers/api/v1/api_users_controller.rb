class Api::V1::ApiUsersController < ApiController
  before_action :authenticate_user!

  def show
  end
 
  def update
    if current_user.update_attributes(api_user_params)
      render :show
    else
      render json: { errors: current_user.errors }, status: :unprocessable_entity
    end
  end


  private

  def api_user_params
    params.require(:api_user).permit(:username, :email, :password)
  end

end

