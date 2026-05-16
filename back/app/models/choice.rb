class Choice < ApplicationRecord
  belongs_to :question

  validates :content, presence: true
  validates :score, presence: true, inclusion: { in: 1..3 }
end
