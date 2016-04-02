
class Droid

  def initialize
    @power = "off"
  end

  def on!
    @power ="on"
    true
  end

  def off
    @power = "off"
    false
  end

end


