Rails.application.routes.draw do
    devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
    resources :lists, only: [:create, :destroy] do
      resources :tasks, except: [:new, :edit, :show]
    end    
    root 'welcome#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
