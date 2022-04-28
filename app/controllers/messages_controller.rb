class MessagesController < ApplicationController

  def index
    @messages = current_user.messages.latest.page(params[:page])
  end

  def new
    @message = Message.new
  end
  
  def create
    @message = current_user.messeges.build(msg_params)
    if @message.save
      ActionCable.server.broadcast "room_channel", {type: 'success', icon: 'message', title: 'Common message', content: @message.content}      
    end
    
  end 
  
  private
  
  def msg_params
    params.require(:message).permit(:content)
  end

end
