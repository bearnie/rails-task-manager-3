class ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    @lists = current_user.lists.all
  end

  def show
    @list = current_user.lists.find(params[:id])
    respond_to do |format|
      format.html { render :show}
      format.json { render json: @list}
    end
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
      redirect_to lists_path(@list)
    else
      flash[:notice] = "Error"
      render 'new'
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update(list_params)
    redirect_to lists_path(@list)
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to lists_path
  end

  private

  def list_params
    params.require(:list).permit(:name, :due_date)
  end
end
