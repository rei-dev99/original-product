class Question < ApplicationRecord
  belongs_to :category
  has_many :choices, dependent: :destroy

  validates :content, presence: true, uniqueness: true
end
