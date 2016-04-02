def calculate_tip
    puts "How good was your service?"
    rating = gets.chomp
    rating.downcase!
    puts "How much was the bill?"
    amount = gets.chomp
    amount = amount.to_i
    if rating == "terrible"
        tip = 0
    elsif rating == "poor"
        tip = amount * 0.05
    elsif rating == "good"
        tip = amount * 0.1
    elsif rating == "great"
        tip = amount * 0.15
    elsif rating == "excellent"
        tip = amount * 0.2
    else
        puts "rating not recognized"
    puts "Total paid: #{amount + tip.ceil}"
    end
end
calculate_tip

class BananaStand
    attr_access :color, :opened_in, :manager, :accepts_credit_cards

    def color
        @color ||= yellow
    end
    def opened_in
        @year ||= 2015
    end
    def manager
        @manager ||= "George Michael"
    end
    def accepts_creditcards
        @money ||= true
    end
end

class Student
    def age
        29
    end
    def hair_color
        @color ||= "brown"
    end
    def haircolor= name_of_color
        @color = name_of_color
    end
end

def plays_banjo?(name)
    put "What is your name?"
    name = gets.chomp.downcase
    if name[0] == "r"
        puts "#{named} plays banjo."
    else
        puts "#{name} does not play banjo."
    end
end

plays_banjo?('john')
plays_banjo?('rahul')
