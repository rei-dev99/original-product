class UserCredential < ApplicationRecord
  belongs_to :user

  has_secure_password validations: false

  validates :provider, presence: true
  validates :uid, presence: true

  validates :email, presence: true, uniqueness: true, if: -> { provider == "email" }
  validates :password, presence: true, length: { minimum: 8 }, if: -> { provider == "email" }
end
