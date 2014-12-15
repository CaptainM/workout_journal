# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
f = File.open(ENV["PWD"]+"/db/workout.json")
myjson = JSON.parse(f.read)

workout_hash = myjson.values[0].map do |one_workout|
	{
		level: one_workout["level"].to_i
	}
end

Workout.create(workout_hash)

excercise_hash = myjson.values[0].map do |one_excercise|
	
	{
		name: one_excercise["exercises"][0]["name"],
		difficulty: one_excercise["exercises"][0]["difficulty"].to_i,
		reps: one_excercise["exercises"][0]["reps"].to_i,
		sets:one_excercise["exercises"][0]["sets"].to_i,
		requirements: one_excercise["exercises"][0]["requirements"].join(","),
		bodypart:one_excercise["exercises"][0]["bodypart"],
		description:one_excercise["exercises"][0]["description"],
		pounds: one_excercise["exercises"][0]["reps"].to_i,
		workout_id: Workout.find(one_excercise["id"])
	}
end

Excercise.create(excercise_hash)
