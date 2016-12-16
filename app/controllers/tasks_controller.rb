class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @list = List.find(params[:list_id])
    @tasks = @list.tasks
    respond_to do |format|
      format.html { render :index}
      format.json { render json: @tasks}
    end
  end

  def show

  end

  def new
    @list = List.find(params[:list_id])
    @task = @list.tasks.build
  end

  def edit
    @list = List.find(params[:list_id])
    puts @list.id
    @task = Task.find(params[:id])
  end

  def create
    @list = List.find(params[:list_id])
    @task = @list.tasks.build(task_params)
    if @task.save
      redirect_to list_path(@list)
    else
      flash[:notice] = "Error"
      render 'new'
    end
  end

  def update
    @list = List.find(params[:list_id])
    @task = Task.find(params[:id])
    @task.update(task_params)
    redirect_to list_path(@list)
  end

  def destroy
    puts params.inspect
    @list = List.find(params[:list_id])
    puts @list.id
    @task = @list.tasks.find(params[:id])
    puts @task.id
    @task.destroy
    redirect_to list_path(@list)
  end

  private

  def task_params
    params.require(:task).permit(:name, :complete)
  end
end
