class AgeVerificationController < ApplicationController
  def index
  end

  def age_check
    if request.request_parameters[:over_18] && request.request_parameters[:terms]
      redirect_to '/winner'
    else
      redirect_to '/try_again'
    end
  end
end
