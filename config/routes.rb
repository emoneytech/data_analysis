Rails.application.routes.draw do
  root 'data_analysis/dashboard#index'
  devise_for :users

  get "/triggers/services/:id" => "triggers#services", :as => :triggers_service

  namespace :compliance_check do
    resources :sanction_lists do
      member do 
        post :import
      end
      resources :sanction_list_items do
        collection do 
          get :search
        end
      end  
    end
  end

  namespace :customers do
    resources :anagrafiche do
      resources :customer_settings
      
      resources :charts do
        collection do
          get 'eval_movements_for_month/:year/:month' => :eval_movements_for_month, as: :eval_movements_for_month
        end
      end
      member do
        post :set_eval_movements
        get 'reports/:time_lapse' => :reports, as: :reports
      end
      resources :risk_movements, only: [:show, :index] do
        collection do
          post :recalculate_risk
          get :details
        end
      end
      resources :eval_riskinesses, only: [:show, :index]
      resources :eval_customers, only: [:show, :index]
      resources :eval_movements do
        collection do
          get 'for_day/:day' => :for_day, as: :for_day
          get 'for_month/:year/:month' => :for_month, as: :for_month
        end
      end
      
      resources :prodotti, only: [:show, :index]
      resources :time_lapse_factors do 
        resources :time_lapse_factor_audits
      end
      resources :notes
    end
  end

  namespace :brokers do
    resources :vendors do
      member do
        get 'reports/:time_lapse' => :reports, as: :reports
      end
      resources :prodotti
    end
  end

  namespace :data_analysis do
    resources :charts do
      collection do
        get :all_risk_movements
        get 'average_stocks/:id' => :average_stocks, as: :average_stocks
      end
    end
    resources :conti, only: [:show, :index] do
      member do
        get 'get_average'
        get 'get_max_amount'
        get 'get_average_amount'
      end
    end
    resources :dashboard, only: :index
    resources :dashboard2, only: :index
    resources :eval_movements do
      collection do
        get 'for_day/:day' => :for_day, as: :for_day
        get 'for_month/:year/:month' => :for_month, as: :for_month
      end
    end
    resources :eval_riskinesses
    resources :matviews
    resources :maps
    resources :movimenticonti
    resources :places
    resources :prodotti
    resources :recursions do
      collection do
        get :chart
      end
    end
    resources :related_countries
    resources :reports do
      member do
        get :download
      end
    end
    resources :rischi
    resources :servizi do
      collection do
        get :map
        get :reports
      end
    end
    resources :sync, only: :index
    resources :setup
    resources :time_lapse_factors
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
