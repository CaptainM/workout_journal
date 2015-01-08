class Workout < ActiveRecord::Base
	validates_presence_of :level

	has_and_belongs_to_many :users
	has_many :exercises, dependent: :destroy

	# def self.workout_completed(user)
	# 	if self.users.include? user
	#     
	# end

	def self.unfinished_workouts(user)
		Workout.all.reject do |workout|
			workout.users.include? user
		end
	end

end