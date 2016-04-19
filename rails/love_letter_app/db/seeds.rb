# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Lover.destroy_all
LoveLetter.destroy_all

lover = Lover.create({name: "Romeo"})
love_letter = LoveLetter.create({message: "Girrrl"})

love_letter.lover_id = lover.id
love_letter.save
