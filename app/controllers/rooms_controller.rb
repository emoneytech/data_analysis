class RoomsController < ApplicationController
  add_breadcrumb helpers.raw("#{helpers.fa_icon('message')} Chat"), :chat_path

  def index
    @current_user = current_user
    @rooms = Room.public_rooms
    @users = User.all_except(@current_user)
  end


end

