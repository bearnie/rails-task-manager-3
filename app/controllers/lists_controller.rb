class ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    @lists = current_user.lists.all
  end

  def show
    @list = current_user.lists.find(params[:id])
  end

  def new
    @list = current_user.lists.build
  end

  def edit
    @list = current_user.lists.find(params[:id])
  end

  def create
    @list = current_user.lists.build(list_params)
    if @list.save
      redirect_to list_path(@list)
    else
      render 'new'
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update(list_params)
    redirect_to list_path(@list)
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to 'lists'
  end

  private

  def list_params
    params.require(:list).permit(:name, :due_date)
  end
end
