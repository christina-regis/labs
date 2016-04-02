require_relative 'dog'

class Terrier < Dog
  attr_accessor :name, :age
  attr_reader :breed

  def initialize(name, age)
    @name = name
    @age = age
    #@breed = "Terrier"
    super(@name, "Terrier", @age)
  end

end

#puppy = Terrier.new("Rufus", 2)
#puppy.speak ==> "woof!"
#puppy.breathe ==> pant "inhale and exhale"
#pants shows because of puts
