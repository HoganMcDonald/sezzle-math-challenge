module Api
  class EquationsController < ApplicationController
    def index
      equations = Equation.last(10).map do |equation|
        serialize_equation(equation)
      end

      render json: equations
    end

    def create
      equation = Equation.create! equation_params
      render status: :created, json: serialize_equation(equation)
    end

    private

    def equation_params
      params.permit(
        :operator,
        :operand1,
        :operand2
      )
    end

    def serialize_equation(equation)
      {
        operand1: equation.operand1,
        operand2: equation.operand2,
        operator: equation.operator,
        solution: equation.solution
      }
    end
  end
end
