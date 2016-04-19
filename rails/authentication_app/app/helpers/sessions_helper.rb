module SessionsHelper
  def current_user
    #if we have the current user we are not going to access the database
    #if @current_user is nil we'll go to the database to find that user
    @current_user ||= User.find_by({
      id: session[:user_id]
      })
  end
end
#helpers are avialable to all views
