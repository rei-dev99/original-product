FactoryBot.define do
  factory :user_credential do
    association :user

    sequence(:email) { |n| "email_#{n}@example.com"  }
    provider { "email" }
    uid { email }
    password { "password" }

    trait :guest do
      provider { "guest" }
    end

    trait :google do
      provider { "google" }
      uid { rand(10000000000000000000..99999999999999999999) }
      email { nil }
      password { nil }
    end
  end
end
