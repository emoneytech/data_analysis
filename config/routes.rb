Rails.application.routes.draw do
  root 'data_analysis/dashboard#index'
  devise_for :users

  get "/triggers/services/:id" => "triggers#services", :as => :triggers_service

  namespace :customers do
    
    resources :anagrafiche do
      resources :charts do
        collection do
          get 'eval_movements_for_month/:year/:month' => :eval_movements_for_month, as: :eval_movements_for_month
        end
      end
      member do
        post :set_eval_movements
      end
      resources :risk_movements, only: [:show, :index] do
        collection do
          post :recalculate_risk
          get :details
        end
      end
      resources :conti
      resources :movimenticonti, only: [:show, :index]
      resources :eval_riskinesses, only: [:show, :index]

      resources :eval_customers, only: [:show, :index]
      resources :eval_movements do
        collection do
          get 'for_day/:day' => :for_day, as: :for_day
          get 'for_month/:year/:month' => :for_month, as: :for_month
        end
      end
      
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
    resources :rischi
    resources :sync, only: :index
    resources :eval_riskinesses
    resources :eval_movements
    resources :matviews
    resources :movimenticonti
    resources :prodotti
    resources :maps
    resources :places
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
    resources :setup
  end
  resources :roles
  resources :users
  resources :excluded_products do
    collection do
      get :add_multiple
      post :create_multiple
    end
  end

  require 'sidekiq/web'
  require 'sidekiq-scheduler/web'
  authenticate :user, lambda { |u| u.include_role?("admin") } do
    mount Sidekiq::Web => '/sidekiq'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
