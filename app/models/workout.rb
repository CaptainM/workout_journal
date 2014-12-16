class Workout < ActiveRecord::Base
	validates_presence_of :level

	has_and_belongs_to_many :users
	has_many :exercises, dependent: :destroy
end