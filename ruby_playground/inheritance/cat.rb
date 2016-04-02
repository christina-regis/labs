require_relative 'mammal'

class Cat < Mammal
  attr_accessor :name, :breed, :age
  attr_reader :species

  def initialize(name, breed, age)
    @name = name
    @breed = breed
    @age = age
    @species = "cat"
    super()
    #super has to have ()
  end

  def speak
    "meow"
  end

end

#kitten = Cat.new("snugs", "calico", 7)
#kitten.speak ==> "meow"
