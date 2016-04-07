# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

vampires = Vampire.create([
  {name: "Joy", sire: "Ellen", age: 150, country_of_origin: "Sweden", number_of_victims: 5},
  {name: "Helen", sire: "Bob", age: 45, country_of_origin: "Algeria", number_of_victims: 1},
  {name: "Joe", sire:"Joan", age: 200, country_of_origin: "Ethopia", number_of_victims: 15}
  ])
