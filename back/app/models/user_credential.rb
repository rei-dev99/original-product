class UserCredential < ApplicationRecord
  belongs_to :user
  has_secure_password validations: false

  validates :email, presence: true, if: -> { provider == "email" }
  validates :password, presence: true, if: -> { provider == "email" }
end
