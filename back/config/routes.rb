Rails.application.routes.draw do
  resources :health, only: :index
  resources :categories, only: %i[index]
  resources :questions, only: %i[index]
  resources :choices, only: %i[index]
  resources :results
end
