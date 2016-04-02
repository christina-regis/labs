require_relative 'mammal'

class Dog < Mammal
  attr_accessor :name, :breed, :age
  attr_reader :species

  def initialize(name, breed, age)
    @name = name
    @breed = breed
    @age = age
    @species = "dog"
    super()
    #super has to have ()
  end

  def breathe
    puts "pant"
    super()
  end

  def speak
    "woof!"
  end

end

