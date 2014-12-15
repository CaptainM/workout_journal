# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

f = File.open("workout.json")
myjson = JSON.parse(f.read)

excercise_hash = myjson.map do |one_excercise|
	{
		name: one_excercise["workouts"][0]["exercises"][0]["name"],
		difficulty: one_excercise["workouts"][0]["exercises"][0]["difficulty"].to_i,
		reps: one_excercise["workouts"][0]["exercises"][0]["reps"].to_i,
		sets:one_excercise["workouts"][0]["exercises"][0]["sets"].to_i,
		requirements: one_excercise["workouts"][0]["exercises"][0]["requirements"],
		bodypart:one_excercise["workouts"][0]["exercises"][0]["bodypart"],
		description:one_excercise["workouts"][0]["exercises"][0]["description"],
		pounds: one_excercise["workouts"][0]["exercises"][0]["reps"].to_i
	}
end

Excercise.create(excercise_hash)
