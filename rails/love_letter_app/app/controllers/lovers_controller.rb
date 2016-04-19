class LoversController < ApplicationController
  def new
  end

  def create
    lover = Lover.new
    lover.name = params[:name]
    lover.save
    #or -> Lover.create({name: params[:name]})
    redirect_to '/lovers'
  end

  def index
    @lovers = Lover.all
  end

  def destroy
    id = params[:id]
    lover = Lover.find_by(id: params[:id])
    lover.destroy
    redirect_to '/lovers'
  end
end
