# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Character.destroy_all

users = User.create([
		{name: 'Kate', email: 'kate@gmail.com', password: '123', password_confirmation: '123'},
		{name: 'Phil', email: 'phil@gmail.com', password: '123', password_confirmation: '123'}
	])

User.first.characters = Character.create([
		{name: 'Buffy', age: 35, description: 'Slayer, The', active: true},
		{name: 'Willow', age: 35, description: 'Wicca', active: true}
	])

User.last.characters = Character.create([
		{name: 'Xander', age: 35, description: 'Regular, one-eyed guy', active: true},
		{name: 'Giles', age: 55, description: 'Watcher', active: true}
	])
