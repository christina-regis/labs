class StudentsController < ApplicationController

  # GET /students
  def index
    @students = Student.all
  end

  # GET /students/1
  def show
    @student = Student.find(params[:id])
  end

  # GET /students/new
  def new
    @student = Student.new
    @houses = House.all
  end

  # GET /students/1/edit
  def edit
    @student = Student.find(params[:id])
    @houses = House.all
  end

  # POST /students
  def create
    @student = Student.create(student_params)
    redirect_to @student
  end

  # PATCH/PUT /students/1
  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    redirect_to @student
  end

  # DELETE /students/1
  def destroy
    @student = Student.find(params[:id])
    @student.destroy
    redirect_to students_url
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def student_params
      params.require(:student).permit(:name, :age, :house_id)
    end
end
