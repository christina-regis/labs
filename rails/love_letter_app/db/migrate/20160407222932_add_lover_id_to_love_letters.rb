class AddLoverIdToLoveLetters < ActiveRecord::Migration
  def change
    add_column(:love_letters, :lover_id, :integer)
  end
end

# in terminal (too add additional column/associate tables)
# rails g migration add_lover_id_to_love_letters
# add info to def change in this file
# rake db:migrate
# create seeds
# destroy_all previous entries
# rake db:seed
