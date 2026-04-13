Rails.application.routes.draw do
  # root "posts#index"
  resources :health, only: :index
end
