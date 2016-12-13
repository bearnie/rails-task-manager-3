class ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    @lists = current_user.lists.all
  end

  def show

  end

  def new
    @list = current_user.lists.build
  end

  def edit

  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def list_params

  end
end
