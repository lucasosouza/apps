class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :user, index: true
      t.references :question, index: true
      t.references :answer, index: true
      t.boolean :upvote

      t.timestamps null: false
    end
    add_foreign_key :votes, :users
  end
end
