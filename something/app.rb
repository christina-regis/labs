require 'pg'
#database name is world
#table in database is country
#conn = PG.connect( dbname: 'world')
#conn.exec( "SELECT * FROM country" ) do |result|
 # result.each do |row|
  #  puts row["code"]
  #end
#end

# update the name of the 'united states' to 'america'
conn = PG.connect( dbname: 'world')
conn.exec( "UPDATE country SET name = 'America' WHERE name = 'United States'" ) do |result|
end

conn.exec("SELECT * FROM country WHERE name = 'America'") do |result|
  result.each do |row|
    puts row["name"]
  end
end
# add a country to a the country table
conn.exec("INSERT INTO country (name,code) VALUE ('westeros', 'wes')") do |result|
  end

# delete a country from the table
conn.exec( "DELETE FROM country WHERE code = 'USA'") do |result|
  puts result.inspect
end

# get the total surface area of all the countries
conn.exec("SELECT SUM('surfacearea') FROM country") do |result|
land = result["sum"]
total = 197000000
percent = land/total;
end


