class HousesController < ApplicationController

  # GET /houses
  def index
    @houses = House.all
  end

  # GET /houses/1
  def show
    @house = House.find(params[:id])
  end

  # GET /houses/new
  def new
    @house = House.new
  end

  # GET /houses/1/edit
  def edit
    @house = House.find(params[:id])
  end

  # POST /houses
  def create
    @house = House.create(house_params)
    redirect_to @house
  end

  # PATCH/PUT /houses/1
  def update
    @house = House.find(params[:id])
    @house.update(house_params)
    redirect_to @house
  end

  # DELETE /houses/1
  def destroy
    @house = House.find(params[:id])
    @house.destroy
    redirect_to houses_url
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def house_params
      params.require(:house).permit(:name)
    end
end
