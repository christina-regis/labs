class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by({
      email: params[:email]
      })
    #if the user exists and password is correct
    if user && user.authenticate(params[:password])
      #makes a new object :user_id -> which stores cookie in browser
      session[:user_id] = user.id
      redirect_to '/'
    else
      #flash[:error] = 'Incorrect username/password'
      render :new #references the new method above
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to '/'
  end
end
