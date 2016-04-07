    # t.string   "email"
    # t.date     "born_on"
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.string   "first_name"
    # t.string   "last_name"


class Owner < ActiveRecord::Base
  # active record associate
  # creates method on the model
  # creates a .pets method
# SELECT * FROM pets WHERE owner_id = ?
  has_many(:pets)
end

def full_name
  "#{self.first_name} #{self.last_name}"
end

# .save -> insert into
#.new -> class
#.create -> insert into
#.destroy -> delete from
