class ExercisesController < ApplicationController
	def index
		@workout = Workout.all.sample()
		@exercises = @workout.exercises
		render json: @exercises
	end

	def show 
		@exercise = Exercise.find(params[:id])
		render json: @exercise
	end

	def search
		@parameter = Youtube.search(params[:exercise])
		render json: {video_url: @parameter}
		puts "***********************"
		puts @parameter.inspect
		puts "***********************"
	end


end