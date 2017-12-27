class AddAttachmentPhotoToDesigns < ActiveRecord::Migration
  def self.up
    change_table :designs do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :designs, :photo
  end
end
