class BeansController < ApplicationController

before_action :set_bean, only: [:show, :edit, :update, :destroy]

#show all the beans
  def index
      @beans = Bean.all
  end
#look in Bean table/model and find the bean by the id called
  def show

  end

  def new
    @bean = Bean.new
  end

  def create
    @bean = Bean.new(bean_params)
    if @bean.save
      redirect_to bean_path(@bean)
    else
      render :new
    end
  end

    def edit

    end

  def update

      if @bean.update_attributes(bean_params)
        redirect_to bean_path(@bean)
      else
        render :edit
      end
    end

  def destroy

    @bean.destroy
    redirect_to beans_path
  end

private
  def set_bean
    @bean=Bean.find(params[:id])
  end

  def bean_params
    params.require(:bean).permit(:name, :roast, :origin, :quantity)
  end

end


