class User < ActiveRecord::Base
  has_secure_password
end

#when model is created use password_digest for password column
