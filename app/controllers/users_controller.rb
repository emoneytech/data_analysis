class UsersController < ApplicationController
  load_and_authorize_resource except: :create
  add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{User.model_name.human(count: 2)}"), :users


  def index
    if params[:filter]
      @current_role = Role.active.pluck(:name).include?(params[:filter][:role]) ? params[:filter][:role] : nil
      @users = @users.includes(:role).where("roles.name = ?", @current_role).references(:role).page(params[:page]).per(params[:per])
    else
      @users = @users.page(params[:page]).per(params[:per])
    end
  end

  def new
    add_breadcrumb I18n.t(:add_resource, resource: User.model_name.human), :new_manager_user_path
  end

  def create
    add_breadcrumb I18n.t(:add_resource, resource: User.model_name.human), :new_manager_user_path
    @user = User.new(secure_params)
    authorize! :create, @user
    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @user = User.find(params[:id])
    add_breadcrumb "#{@user.full_name}", :manager_user_path
    unless current_user.has_role? "superadmin"
      unless @user == current_user
        redirect_to root_path, :alert => "Access denied."
      end
    end
  end

  def edit
    add_breadcrumb "#{@user.full_name}", :edit_manager_user_path
  end

  def update
    @user = User.find(params[:id])
    if @user.update(secure_params)
      redirect_to @user, :notice => "User updated."
    else
      render "edit"
    end
  end


  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path, :notice => "User deleted."
  end


private

  def secure_params
    if params[:user][:password].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
    params.require(:user).permit(
      :active,
      :role_id,
      :first_name,
      :last_name,
      :email,
      :nickname,
      :password,
      :password_confirmation,
      :obfuscator)
  end

end

