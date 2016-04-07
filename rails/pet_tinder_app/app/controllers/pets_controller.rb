class PetsController < ApplicationController
  def index
    id = params[:id] #whatever id is from the request
    #@pets = Pet.all
    @pets = Pet.where(owner_id: id)
    #all the pets by owner
  end
end
