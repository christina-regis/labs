puts "Hello, I am running Ruby with ruby!"
puts "What is your favorite movie?"

#gets is similar to prompt in JS
#chomp is a method that removes the last character of the input (linebreak, in this case)
fav_movie = gets.chomp

puts "I like #{fav_movie}, too!"


MY_NAME = "Kate"
my_age = "29"
def my_stuff (age, name)
  puts "Hi, my name is #{name} and my age is #{age}."
end
my_stuff(my_age, MY_NAME)
#outputs Hi, my name is Kate and my age is 29.


my_friends = ["Becky", "Jeff", "Blaise"]
def friends list_of_friends
  puts "Hi there, these are my friends: " + list_of_friends.join(' ')
end
friends my_friends
#outputs Hi there, these are my friends: Becky Jeff Blaise


heroic = false

def do_something_heroic
  puts "I'll save you!"
end

def do_something_evil
  puts "Give me your money!"
end

#if heroic
 # do_something_heroic
#end

# same as above just shorter
do_something_heroic if heroic

#if heroic != true
 # do_something_evil
#end

#same as above
#do_something_evil if !heroic

#unless heroic
#  do_something_evil
#end

#same as above
do_something_evil unless heroic


delicious = true
healthy = false

#if delicious && healthy
#  puts "eat that food"
#don't need ()
#elsif (delicious == true) && (healthy == false)
#shorter
#elsif delicious && !healthy
#  puts "eat it anyway"
#end
#same as above
#puts "eat it anyway" unless delicious && !healthy

if delicious || healthy
  puts "eat that food"
end

#same as above
puts "eat that food" if delicious || healthy

awesome = "a dog"
awesome ||= "this cat"

puts awesome
# outputs a dog, this cat is only applied if awesome variable hasn't been used

#def get_fave_movie
  #puts "What is your favorite movie?"
  fave_movie = gets.chomp.downcase
  #generally use chomp when using gets
  #downcase, entered case doesn't matter
  #if fave_movie == "dodgeball" || fave_movie == "forgetting sarah marshall"
    #puts "I love #{fave_movie}, too"
  #else
    #puts "Really? Are you sure?"
    get_fave_movie
  #end
#end

get_fave_movie


home = {
:address=>"123 Park Place",
:city=>"Monopoly",
:state=>"CA"
:beds=>3,
:baths=>2,
:features=> {
  :fireplace=>true,
  :garage=>true,
  :centralAC=>true,
  :sprinkler=>false
  },
:sales=> [
  {:date=>"3/2/95", :price=>100000},
  {:date=>"1/25/03", :price=>400000},
  {:date=>"9/14/08", :price=>700000}
  ]
}
#look for sprinkler in features
home[:features][:sprinkler]
#add another sale
home[:sales].push({:date=>"10/18/15",
  :price=>1000000})
#to find last two sale dates
home[:sales][-2..-1]















