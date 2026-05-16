class Result < ApplicationRecord
  belongs_to :user

  validates :advice, presence: true

  validates :ai_score,  presence: true, numericality: { in: 0..100 }
  validates :algorithm_score,  presence: true, numericality: { in: 0..100 }
  validates :db_score,  presence: true, numericality: { in: 0..100 }
  validates :dependency_score,  presence: true, numericality: { in: 0..100 }
  validates :web_score,  presence: true, numericality: { in: 0..100 }
end
