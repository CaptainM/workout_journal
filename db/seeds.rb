# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Workout.destroy_all
Exercise.destroy_all

f = File.open(ENV["PWD"]+"/db/workout.json")
myjson = JSON.parse(f.read)

myjson.values[0].each do |workout|
	new_workout = Workout.create({ level: workout["level"].to_i })

	workout["exercises"].each do |exercise|

		exercise_hash = {
			name: exercise["name"],
			difficulty: exercise["difficulty"].to_i,
			reps: exercise["reps"].to_i,
			sets:exercise["sets"].to_i,
			requirements: exercise["requirements"].join(","),
			bodypart:exercise["bodypart"],
			description:exercise["description"],
			pounds: exercise["reps"].to_i,
			workout_id: new_workout.id
		}
		Exercise.create(exercise_hash)
	end
end


