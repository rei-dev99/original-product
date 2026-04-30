class CreateUserCredentials < ActiveRecord::Migration[8.1]
  def change
    create_table :user_credentials do |t|
      t.references :user, null: false, foreign_key: true
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :email
      t.string :password_digest

      t.timestamps
    end

    add_index :user_credentials, [ :provider, :uid ], unique: true
  end
end
