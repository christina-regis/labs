class Lover < ActiveRecord::Base
  has_many(:love_letters)
end
