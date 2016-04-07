class RemoveNameFromOwners < ActiveRecord::Migration
  def change
    remove_column :owners, :name, :string
    add_column :owners, :first_name, :string
    add_column :owners, :last_name, :string
  end
end
