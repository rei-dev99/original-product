class CreateQuestions < ActiveRecord::Migration[8.1]
  def change
    create_table :questions do |t|
      t.text :content, null: false
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
