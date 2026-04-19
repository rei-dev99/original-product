class CreateResults < ActiveRecord::Migration[8.1]
  def change
    create_table :results do |t|
      t.integer :ai_score, null: false
      t.integer :algorithm_score, null: false
      t.integer :db_score, null: false
      t.integer :web_score, null: false
      t.integer :dependency_score, null: false
      t.text :advice, null: false

      t.timestamps
    end
  end
end
