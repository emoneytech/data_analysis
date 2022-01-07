class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.has_role? "admin"
      can :manage, :all
    elsif user.has_role? "manager"
      can :admin, :dashboard
      can :manage, :all
      cannot :manage, Configurable
      cannot :manage, Role
      can :manage, User, id: user.id
      can :manage, Notification, user_id: user.id
      can :manage, WebpushSubscription, user_id: user.id
      cannot :index, User
      cannot :manage, Configurable
      cannot :manage, Role
      
    else
      can :read, :dashboard
    end
  end

end
