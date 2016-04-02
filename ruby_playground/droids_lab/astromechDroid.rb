require_relative 'droids'

class AstromechDroid < Droid

  def initialize(name)
    @name =name
    super()
  end

  def status
    if @power == "on"
      "Beep Bop Boop"
    else
      "Astromech Droid #{@name} is currently powered off"
    end
  end

end
