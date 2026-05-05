class User < ApplicationRecord
  has_many :user_credentials, dependent: :destroy
  has_many :results
end
