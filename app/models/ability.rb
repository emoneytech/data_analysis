class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.has_role? "superadmin"
      can :manage, :all
    elsif user.has_role? "admin"
      can :manage, :all
      can :manage, Notification, recipient_type: 'User', recipient_id: user.id
      cannot :manage, ObservedElement, category_element: 'system', common_process: true
      cannot :manage, Configurable
      cannot :manage, Role
    elsif user.has_role? "manager"
      can :read, :all
      can [:read, :get_average, :get_max_amount, :get_average_amount], Conti
      can :recursive, EvaluatedMovement
      can :admin, :dashboard
      can :manage, :check_ibans
      can :manage, SanctionList
      can :manage, SanctionListItem
      can :manage, ObservedElement
      can :manage, Note
#      can :manage, :all
      cannot :manage, Configurable
      cannot :manage, Role
      can :read, User, id: user.id
      can :manage, Notification, recipient_type: 'User', recipient_id: user.id
      cannot :destroy, Notification, recipient_type: 'User', recipient_id: user.id, read_at: nil
      can :manage, ActivityLog, user_id: user.id
      cannot :destroy, ActivityLog
      can :manage, WebpushSubscription, user_id: user.id
      can :manage, CustomerSetting
      can :manage, RelatedCountry
      cannot :index, User
      cannot :manage, Configurable
      cannot :manage, Role
    else
      can :read, :dashboard
    end
  end

end
