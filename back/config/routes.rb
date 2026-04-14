Rails.application.routes.draw do
  resources :health, only: :index
  resources :categories, only: %i[index]
  resources :questions, only: %i[index]
end
