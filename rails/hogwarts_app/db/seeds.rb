# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

House.destroy_all
Student.destroy_all

houses = [
  {name: "Gryffindor"},
  {name: "Slytherin"},
  {name: "Hufflepuff"},
  {name: "Ravenclaw"}
]

gryffindors = [
  {name: "Harry Potter", age: 10},
  {name: "George Weasley", age: 13},
  {name: "Ginny Weasley", age: 11},
  {name: 'Katie Bell', age: 11},
  {name: 'Neville Longbottom', age: 11},
  {name: 'Padma Patil', age: 13},
  {name: 'Zacharias Smith', age: 14},
  {name: 'Dean Thomas', age: 11},
  {name: 'Ron Weasley', age: 11},
  {name: 'Hermione Granger', age: 11}
]
slytherins = [
  {name: 'Pansy Parkinson', age: 12},
  {name: "Draco Malfoy", age: 12}
]

hufflepi = [
  {name: 'Ernie Macmillan', age: 14},
  {name: 'Cedric Diggory', age: 14}
]
ravenclaws = [
  {name: 'Marietta Edgecombe', age: 13},
  {name: "Luna Lovegood", age: 13},
  {name: 'Cho Chang', age: 13}
]
House.create(houses)

gryffindors.each do |student|
  house = House.first
  new_student = Student.create(student)
  house.students << new_student
end

slytherins.each do |student|
  house = House.second
  new_student = Student.create(student)
  house.students << new_student
end

hufflepi.each do |student|
  house = House.third
  new_student = Student.create(student)
  house.students << new_student
end

ravenclaws.each do |student|
  house = House.fourth
  new_student = Student.create(student)
  house.students << new_student
end


