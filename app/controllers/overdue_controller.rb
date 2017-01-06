class OverdueController < ApplicationController

  def index
    @lists = current_user.lists.over_due
  end


end
