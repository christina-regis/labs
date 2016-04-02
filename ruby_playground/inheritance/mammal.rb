class Mammal
  attr_reader :animal_class

  def initialize
    @animal_class = "Mammalia"
  end

  def breathe
    "inhale and exhale"
  end

end

#puppy = Mammal.new
#puppy.animal_class ==> "Mammalia"
#kitten = Mammal.new
#kitten.breathe ==> "inhale and exhale"
