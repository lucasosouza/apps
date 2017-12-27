class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end
