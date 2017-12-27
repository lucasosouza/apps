
FactoryGirl.define do
  factory :user do
    sequence(:username) { |n| "lucas#{n}" }
    email "lucasosouza@gmail.com"
    password "abc123"
  end
end
