class CharactersController < ApplicationController
	before_action :set_character, only: [:show, :edit, :update, :destroy]

	# GET /characters
	def index
		if params[:user_id]
			@user = User.find(params[:user_id])
			@characters = @user.characters.all
		else
			@characters = Character.all
		end
	end

	# GET /characters/1
	def show
		@user = User.find(params[:user_id])
	end

	# GET /characters/new
	def new
		@user = User.find(params[:user_id])
		@character = Character.new
	end

	# GET /characters/1/edit
	def edit
		@user = User.find(params[:user_id])
	end

	# POST /characters
	def create
		@user = User.find(params[:user_id])
		@character = @user.characters.new(character_params)
		if @character.save
			redirect_to user_character_path(@user, @character)
		else
			render :new
		end
	end

	# PATCH/PUT /characters/1
	def update
		if @character.update(character_params)
			redirect_to user_character_path(@character.user, @character)
		else
			render :edit
		end
	end

	# DELETE /characters/1
	def destroy
		@user = User.find(session[:user_id])
		@character.destroy
		redirect_to user_characters_path(@user)
	end

private
	# Use callbacks to share common setup or constraints between actions.
	def set_character
		@character = Character.find(params[:id])
	end

	# Never trust parameters from the scary internet, only allow the white list through.
	def character_params
		params.require(:character).permit(:name, :age, :description, :active, :user_id)
	end
end
