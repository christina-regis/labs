@vladamir_putins_brain = {
  :name=>"vladamir putin",
  :launch_code=>"a5Mjp257GHMGH23e5qxE",
  :fave_hobby=>"Riding ponies",
  :prideful=>true
}

@vladamir_putins_brain[:fave_hobby]

@vladamir_putins_brain[:launch_code]

@vladamir_putins_brain[:obsessive_crush] = "Condoleezza"

@vladamir_putins_brain[:torture_count] = 931

puts("#{@vladamir_putins_brain[:name]} loves #{@vladamir_putins_brain[:fave_hobby]}")

@batman = {
  :f_name=>"Bruce",
  :l_name=>"Wayne",
  :billionaire=>true,
  :alter_ego=>"Batman"
}

msg = "#{@batman[:alter_ego]} is the secret identity of #{@batman[:f_name]} #{@batman[:l_name]}, an American #{@batman[:billionaire] ? "billionaire, industrialist, and philanthropist" : "hobo"}."

@villans = ["The Penguin", "The Joker", "The Riddler"]
@sidekicks = [
  {:f_name=>"Jason", :l_name=>"Todd", :alter_ego=>"Robin"},
  {:f_name=>"Dick", :l_name=>"Grayson", :alter_ego=>"Robin"},
  {:f_name=>"Tim", :l_name=>"Drake", :alter_ego=>"Robin"},
]

origin = "Having witnessed the murder of his parents as a child, he swore revenge on #{@villans[1]}, an oath tempered with a sense of justice with his best friend #{@sidekicks[0][:f_name]} #{@sidekicks[1][:s_name]} otherwise known as #{@sidekicks[1][:alter_ego]}"
















