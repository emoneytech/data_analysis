class NotesController < ApplicationController
  before_action :check_for_admin
  load_and_authorize_resource
  add_breadcrumb helpers.raw("#{helpers.fa_icon(Note.icon)} #{Note.model_name.human(count: 2)}"), :notes

  def index
    @notes = @notes.order(created_at: :desc).page(params[:page]).per(params[:per])
  end

  def show
  end



private
  def check_for_admin
    unless current_user.has_role? "superadmin"
      redirect_to root_path, :alert => "Access denied."
    end
  end
end

