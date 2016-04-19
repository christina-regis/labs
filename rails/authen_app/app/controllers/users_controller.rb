class UsersController < ApplicationController
  def index
    @user = User.all
  end

  def new
  end

  def create
    @user = User.new({
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
      })
    if @user.save
      redirect_to '/'
    else
      render :new
    end
  end
end
