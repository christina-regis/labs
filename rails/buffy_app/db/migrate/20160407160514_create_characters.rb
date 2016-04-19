class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.string :power
      t.integer :age
      t.boolean :living

      t.timestamps null: false
    end
  end
end
