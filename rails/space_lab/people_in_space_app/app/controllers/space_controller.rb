class SpaceController < ApplicationController
  def index
    url = "http://api.open-notify.org/astros.json"
    response = HTTParty.get(url)
    @space_people = response["number"]
  end
end
