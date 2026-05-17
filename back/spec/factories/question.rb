FactoryBot.define do
  association :category

  factory :question do
    sequence(:content) { |n| "question_#{n}"  }
  end
end
