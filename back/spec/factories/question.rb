FactoryBot.define do
  factory :question do
    association :category
    sequence(:content) { |n| "question_#{n}"  }
  end
end
