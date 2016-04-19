# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

    # t.string   "name"
    # t.string   "power"
    # t.integer  "age"
    # t.boolean  "living"
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false

#.create saves .new does not save
characters = Character.create([
  {name: 'Buffy Anne Summers', power: 'slayer', age: 35, living: true},
  {name: 'Willow Rosenberg', power: 'witch', age: 35, living: true},
  {name: 'Xander Harris', power: 'none', age: 35, living: true}
  ])

#check in rails C
#Character.all -> shows all
#Character.first -> shows first
#Character.last -> shows last
#Character.find_by(name:"Willow Rosenberg")
#Character.find(2) -> finds by id
