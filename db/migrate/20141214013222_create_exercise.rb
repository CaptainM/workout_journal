class CreateExercise < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
    	t.string :name
    	t.integer :difficulty
    	t.integer :reps
    	t.integer :sets
    	t.string :requirements
    	t.string :bodypart
    	t.string :description
    	t.integer :pounds
    	t.references :workout

    	t.timestamps
    end
  end
end
