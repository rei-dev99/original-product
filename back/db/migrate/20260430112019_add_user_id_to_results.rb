class AddUserIdToResults < ActiveRecord::Migration[8.1]
  def change
    add_reference :results, :user, foreign_key: true
  end
end
