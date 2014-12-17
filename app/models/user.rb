class User < ActiveRecord::Base
	validates_presence_of :name, :username, :age
	validates_uniqueness_of :username
	has_secure_password

	has_and_belongs_to_many :workouts

end
