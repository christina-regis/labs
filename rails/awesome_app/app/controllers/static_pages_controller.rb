class StaticPagesController < ApplicationController
  def form
  end

  def submit
   data = request.request_parameters
   if data[:email] != '' && data[:message] != ''
    redirect_to 'http://google.com'
    else
    render({plain: 'missing fields'})
    end
  end

end
