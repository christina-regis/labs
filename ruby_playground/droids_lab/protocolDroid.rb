require_relative 'droids'

class ProtocolDroid < Droid

  def initialize(name)
    @name =name
    super()
    #only need super() if need to inherit paramaters from parent
  end

  def status
    if @power == "on"
      "Hello Sir! Protocol Droid #{@name} at your service"
    else
      "ProtocolDroid #{@name} is currently powered off"
    end
  end

end
