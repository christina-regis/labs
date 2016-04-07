# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

beans = Bean.create([
  {name: "Kate's Caramel Coffee", roast: "medium", origin: "Colombia", quantity: 100},
  {name: "Matt's Marvelous Mocha", roast: "hella strong", origin: "Mexico", quantity: 101},
  {name: "Phil's Foamy Frappuccino", roast: "decaf", origin: "France", quantity: 50}

  ])
