    # t.integer  "owner_id"
    # t.string   "name"
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false

class Pet < ActiveRecord::Base
  #creates .owner
  #"SELECT * FROM owner WHERE id =?"
  belongs_to(:owner)
end
