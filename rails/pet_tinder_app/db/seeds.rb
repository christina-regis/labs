# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

 Owner.destroy_all #empties out any previous owner rows\
 Pet.destroy_all
#rake db:seed runs file
o2 = Owner.new
o2.first_name = 'Gary'
o2.last_name = 'Busey'
o2.email = 'gdawg@movie.biz'
o2.save

#create makes an object and saves it
owners = Owner.create({
  first_name: 'Suzie',
  last_name: 'Smith',
  email: 'jailbird87@singsing.biz'
  })

#change info in memory
o2.email = 'singh@singh.com'
o2.save

p1 = Pet.create({
  name: 'Lucy',
  owner_id: o2.id
  })
p2 = Pet.create({
  name: 'Lady',
  owner_id: o2.id
  })
p3 = Pet.create({
  name: 'Franklin',
  owner_id: owners.id
  })
p4 = Pet.create({
  name: 'Bailey',
  owner_id: owners.id
  })

# model -> Pet.all
# route -> get 'pets' => 'pets#index'
# controller 'pets#index'

# request.query_paramerters
# request.request_paramerts




