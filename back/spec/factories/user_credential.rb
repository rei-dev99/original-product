FactoryBot.define do
  factory :user_credential do
    association :user

    sequence(:email) { |n| "email_#{n}@example.com"  }
    provider { "email" }
    uid { email }
    password { "password" }
  end
end
