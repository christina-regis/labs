class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.integer :owner_id
      t.string :name

      t.timestamps null: false
    end
  end
end
