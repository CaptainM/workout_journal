class ExercisesController < ApplicationController
	before_action :authenticate, except: [:show, :search]

	def index
		@workout = Workout.unfinished_workouts(User.find(session[:current_user_id])).sample
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




end