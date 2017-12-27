class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.integer :price

      t.timestamps null: false
    end
  end
end
