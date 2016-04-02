class UsersController < ApplicationController
  def index
   # qs = request.query_parameters
   # if qs[:search] == 'a'
   #   render({plain: 'has a'})
   # else
   #  render({plain: 'does not have a'})
    #end
  end

  def home
  end

  def about
  end

  def create_form
    data = request.request_parameters
    if data[:email] == '' || data[:message] == ''
      render({plain: 'you left something blank'})
    else
      render({plain: 'your message was received'})
    end
  end

  def create
    data = request.request_parameters
    render({plain: data})
  end

end
