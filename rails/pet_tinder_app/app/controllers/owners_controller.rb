class OwnersController < ApplicationController
  def index
    #grab all the owners in the database
    @owners = Owner.all
  end
end
