class CreateWorkout < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
    	t.integer :level

    	t.timestamps
    end
  end
end
