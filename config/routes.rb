Rails.application.routes.draw do
  root 'data_analysis/dashboard#index'
  devise_for :users

  namespace :customers do
    resources :anagrafiche do
      resources :risk_movements, only: [:show, :index] do
        collection do
          post :recalculate_risk
          get :details
        end
      end
      resources :conti
      resources :movimenticonti, only: [:show, :index]
      resources :eval_riskinesses, only: [:show, :index]
      resources :evaluated_risks, only: [:show, :index]
      resources :evaluated_movements, only: [:show, :index]
      resources :prodotti, only: [:show, :index]
      resources :servizi, only: [:show, :index]
      resources :anagrafica_time_lapse_factors do 
        resources :time_lapse_factor_audits
      end
      resources :notes
    end
  end

  namespace :data_analysis do
    resources :dashboard, only: :index
    resources :dashboard2, only: :index
    resources :anagrafiche do
      resources :risk_movements, only: [:show, :index] do
        collection do
          post :recalculate_risk
          get :details
        end
      end
      resources :conti
      resources :anagrafica_time_lapse_factors do 
        resources :time_lapse_factor_audits
      end
      resources :notes
    end
    resources :rischi
    resources :sync, only: :index
    resources :eval_riskinesses
    resources :matviews
    resources :movimenticonti
    resources :servizi do
      collection do
        get :map
      end
    end
    resources :charts do
      collection do
        get :all_risk_movements
      end
    end
  end
  resources :roles
  resources :users

  require 'sidekiq/web'
  require 'sidekiq-scheduler/web'
  authenticate :user, lambda { |u| u.include_role?("admin") } do
    mount Sidekiq::Web => '/sidekiq'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
