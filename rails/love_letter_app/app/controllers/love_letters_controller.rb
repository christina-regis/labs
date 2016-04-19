class LoveLettersController < ApplicationController

# get 'love_letters/new'
# get 'love_letters/:lover_id/love_letters/new'
  def new
    @lover_id = params[:lover_id]
  end

  def create
    message = params[:message]
    lover_id = params[:lover_id]
    ll = LoveLetter.new
    ll.message = message
    ll.lover_id = lover_id
    ll.save
    redirect_to '/love_letters'
  end

# get '/love_letters'
  def index
    @love_letters = LoveLetter.all
  end

# "DELETE" to /love_letters/:id
  def destroy
    id = params[:id]
    love_letter = LoveLetter.find_by(id: params[:id])
    love_letter.destroy
    redirect_to '/love_letters'
  end

  def show
  end

end
