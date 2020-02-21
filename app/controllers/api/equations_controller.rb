module Api
  class EquationsController < ApplicationController
    def index
      equations = Equation.most_recent

      render json: equations
    end

    def create
      equation = Equation.create! equation_params
      ActionCable.server.broadcast 'recent_equations', Equation.most_recent
      render status: :created, json: equation
    end

    private

    def equation_params
      params.permit(
        :operator,
        :operand1,
        :operand2
      )
    end
  end
end
