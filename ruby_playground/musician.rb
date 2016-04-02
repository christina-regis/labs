
#this is meta programing, it creates getter and setter methods
#for attribute called name
#still need @name in initialize
#attr_accessor(:name)

class Musicians

  NOTES = ["♩", "♪", "♫", "♬"]

  def initialize(name, instruments)
    @name_musician = name_musician
    @instruments = instruments
  end

  def play
    @random1 = NOTES.shuffle.first
    @random2 = NOTES.shuffle.first
    "#{@random1} #{@name_musician} is playing music! #{@random2}"
  end

end

@m1 = Musicians.new("Black Francis", "Guitar")
@m2 = Musicians.new("Kim Deal", "Piano")

class Band

NOTES = ["♩", "♪", "♫", "♬"]
  def initialize(name)
    @name_band = name_band
    @band = []
  end

  def add(musician)
    @band.push(musician)
  end

  def jam
    @random1 = NOTES.shuffle.first
    @random2 = NOTES.shuffle.first
    "#{@random1} #{@band[0]} is playing music #{@random1} #{@random1} #{@band[1]} is playing #{@random1}"
  end

end



