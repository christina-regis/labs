class CreateLoveLetters < ActiveRecord::Migration
  def change
    create_table :love_letters do |t|
      t.string :message

      t.timestamps null: false
    end
  end
end
