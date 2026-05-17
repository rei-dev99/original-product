FactoryBot.define do
  factory :result do
    association :user
    sequence(:advice) { |n| "advice_#{n}"  }
    ai_score { 10 }
    algorithm_score { 10 }
    db_score { 10 }
    dependency_score { 10 }
    web_score { 10 }
  end
end
