class WorkoutsController < ApplicationController

	def show
		@workout = Workout.all.sample()
		
	end

end