FactoryGirl.define do
  factory :question do
    title Faker::Company.catch_phrase
    content Faker::Company.bs
    association :user
  end
end