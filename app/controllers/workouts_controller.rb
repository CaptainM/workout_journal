class WorkoutsController < ApplicationController

	def show
		@workout = Workout.all.sample()
		
	end

	def complete
		user = User.find(session[:current_user_id])
		workout = Workout.find(params[:id])
		user.workouts << workout
		
		render nothing: true
	end

end