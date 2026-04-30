class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users do |t|
      t.string :status, null: false, default: "active"
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
