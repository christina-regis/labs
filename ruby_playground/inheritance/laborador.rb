require_relative 'dog'

class Laborador < Dog
  attr_accessor :name :age

  def initialize(name, age)
    @name = name
    @age = age
    @species = "Laborador"
    super(@name, "Laborador", @age)
  end

end
