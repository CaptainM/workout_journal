class ExercisesController < ApplicationController
	def index
		@workout = Workout.all.sample()
		@exercises = @workout.exercises
		render json: @exercises
	end

	def show 
		@exercise = Exercise.find(params[:id])
		render json: @person
	end


end