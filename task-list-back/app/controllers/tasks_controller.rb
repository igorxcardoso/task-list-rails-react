class TasksController < ApplicationController
    def show
        @tasks = Task.all
        render json: @products
    end

    def create
        @task = Task.new(task_params)
    
        if @task.save
            render json: @task, status: :created
        else
            render json: @task.erros, status: :unprocessable_entity
        end
    end

    def task_params
        params.require(:task).permit!(:title, :price)
        # ActiveModelSerializers::Deserialization.jsonapi_parse(params, polymorphic: [:user], embedded: [:user_detail])
    end
end
