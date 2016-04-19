class User < ActiveRecord::Base
	has_many :characters, dependent: :destroy

	has_secure_password
end
