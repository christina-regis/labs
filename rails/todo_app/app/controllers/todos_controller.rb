class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(params.require(:todo).permit(:task, :done))

    if @todo.save
      redirect_to "/todos"
    else
      render :new
    end
  end

  def edit
    @todo = Todo.find(params[:id])
  end
end
