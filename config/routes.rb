Rails.application.routes.draw do
  root "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :rooms, only: [:index, :show]
    resources :messages, only: [:create]
  end

  get "*path", to: "static_pages#root"
end
