# == Route Map
#

Rails.application.routes.draw do
  
  # mount ConfigurableEngine::Engine, at: "/configurable", as: "configurable"
  
  root 'data_analysis/dashboard#index'
  devise_for :users
  resources :configurables
  
  match '/forbidden', to: "pages#forbidden", via: :get, as: :forbidden

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
      resources :conti
      resources :ibans

      resources :customer_settings
      
      resources :charts do
        collection do
          get :latest_customer_evaluations
          get :latest_evaluated_movements
          get :evaluated_movements
          get :latest_products
          get 'evaluated_movements_for_month/:year/:month' => :evaluated_movements_for_month, as: :evaluated_movements_for_month
        end
      end
      member do
        get 'reports/:time_lapse' => :reports, as: :reports
      end
      resources :risk_movements, only: [:show, :index] do
        collection do
          post :recalculate_risk
          get :details
        end
      end
      resources :eval_riskinesses, only: [:show, :index]
      # resources :eval_customers, only: [:show, :index]
      resources :customer_evaluations do
        member do
          get :recalculate
        end
      end
      resources :evaluated_movements do
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
        get :count_evaluated_movements
        get :amount_evaluated_movements
        get :sum_evaluated_movements
        get :evaluated_movements
        get :map_destination_countries
        get :map_origin_countries
        get :map_related_countries
        get :products
        get 'average_stocks/:id' => :average_stocks, as: :average_stocks
        get :attention_factors_map
        get :kyc_scores_map
        get :basel_scores_map
        get :gray_or_black_lists_map
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
    resources :check_ibans, only: :index
    resources :dashboard2, only: :index
    resources :evaluated_movements do
      collection do
        get 'for_day/:day' => :for_day, as: :for_day
        get 'for_month/:year/:month' => :for_month, as: :for_month
      end
      member do
        get :recursive
      end
    end
    resources :eval_riskinesses
    resources :ibans
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
    resources :relazioni_anagrafiche
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
    resources :mandati do
      member do 
        post :update_evaluated_movements
      end
      collection do
        get :map
        get :reports
      end
    end
    resources :sync, only: :index
    resources :time_lapse_factors
  end
 
  resources :webpush_subscriptions, only: :create
  resources :messages, only: [:new, :create]
  resources :observed_elements do
    collection do
      get :autocomplete
    end
  end
  resources :roles
  resources :users do
    resources :activity_logs, only: [:index, :show]
    resources :notifications, except: :create do
      collection do
        post :mark_all_as_readed
        post :delete_readed
        post :delete_all
      end
    end

    resources :webpush_subscriptions, except: :create
  end
  
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

