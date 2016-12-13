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

  end

  def destroy

  end

  private

  def task_params
    params.require(:task).permit(:name, :complete)
  end
end
