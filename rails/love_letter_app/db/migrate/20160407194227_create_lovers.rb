class CreateLovers < ActiveRecord::Migration
  def change
    create_table :lovers do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
