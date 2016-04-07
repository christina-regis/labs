class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :name
      t.string :email
      t.date :born_on
      #creates two colums in the table
      #created_at, updated_at
      t.timestamps null: false
    end
  end
end
