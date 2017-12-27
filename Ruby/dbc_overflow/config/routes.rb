Rails.application.routes.draw do

  get 'questions/index'
  root 'questions#index'

  resources :questions do
    resources :answers
  end

  resources :votes, only: [:create]

end
