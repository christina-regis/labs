class SearchResultsController < ApplicationController
  def index
    url = "http://www.omdbapi.com/?"
    response = HTTParty.get(url)
    @movie = response["Title"]
  end
end
