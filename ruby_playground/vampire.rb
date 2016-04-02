class Vampire
  attr_accessor:slayed_at, :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def slayed?
    if @name == "Angel"
      "He lives forever"
    else
    !!@slayed_at
    end
  end
end

# vamp = Vampire.new("Blood Sucker", 249)
# vamp.slayed_at = Time.now


class TimeCard

    attr_accessor :clock_in, :clock_out

  def clock_in?
    !!@clock_in
  end

  def clock_out?
    !!@clock_out
  end
#changes the clock in to false
  def change_stuff!
    @clock_in = false
  end

end

#creates new timecard
card = TimeCard.new
#adds time to clock out
card.clock_out = Time.now
#adds time to clock in
card.clock_in = Time.now
#does clock in have a value
card.clock_in?
#does clock out have a value
card.clock_out?







