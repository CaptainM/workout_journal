class ExercisesController < ApplicationController
	before_action :authenticate, except: [:show, :search]

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
	end

	def user_completed_workout
		user = User.find(params[:current_user_id])
		workout = Workout.find(params[:workout_id])
		user.workouts << workout

	end


end