class CreateVampires < ActiveRecord::Migration
  def change
    create_table :vampires do |t|
      t.string :name
      t.string :sire
      t.integer :age
      t.string :country_of_origin
      t.integer :number_of_victims

      t.timestamps null: false
    end
  end
end
