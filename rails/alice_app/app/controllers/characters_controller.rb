class CharactersController < ApplicationController
  def hatter
  end

  def queen
    redirect_to "http://localhost:3000/off_with_their?part=head"
  end

  def cheshire_cat
  end

  def curious
  end

  def dumb_waiter
  end

  def dumb_waiter1
    if <%=request.query_parameters[:show]%>
      redirect_to "/curious?visit=show"

    elsif <%=request.query_parameters[:hide]%>
      redirect_to "/curious?visit=hide"
    end
  end

end
