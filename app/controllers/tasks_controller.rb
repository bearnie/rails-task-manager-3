class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @list = List.find(params[:list_id])
    @tasks = @list.tasks
  end

  def show

  end

  def new
    @list = List.find_by(params[:list_id])
    @task = @list.tasks.build
  end

  def edit
    @list = List.find_by(params[:list_id])
    @task = Task.find(params[:id])
  end

  def create
    @list = List.find_by(params[:list_id])
    @task = @list.tasks.build(task_params)
    if @task.save
      redirect_to list_tasks_path(@list)
    else
      render 'new'
    end
  end

  def update
    @list = List.find_by(params[:list_id])
    @task = Task.find(params[:id])
    @task.update(task_params)
    redirect_to list_tasks_path(@list)
  end

  def destroy
    @list = List.find(params[:list_id])
    @task = @list.tasks.find_by(params[:id])
    @task.destroy
    redirect_to list_tasks_path(@list)
  end

  private

  def task_params
    params.require(:task).permit(:name, :complete)
  end
end
