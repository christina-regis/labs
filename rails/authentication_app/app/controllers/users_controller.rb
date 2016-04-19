class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
  end

  def create
    #create database with password_digest
    #uncomment bcrypt gem in gemfile
    #run bundle install in terminal
    #add has_secure_password to model
    #add password and password_confirmation to contoller in create method
    #email, password and password_confirmation come from the keys in the form on users new.html.erb
    @user = User.new({
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
      })
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      #sends back to form page
      render :new
    end
  end
end
