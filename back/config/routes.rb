Rails.application.routes.draw do
  resources :health, only: :index
  resources :categories, only: %i[index]
  resources :questions, only: %i[index]
  resources :choices, only: %i[index]
  resources :results
  resources :users, only: %i[index]
  post "login", to: "authentication#login"
  post "login_email", to: "authentication#login_email"
  post "signup_email", to: "authentication#signup_email"
end
