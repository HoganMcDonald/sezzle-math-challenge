class EquationsController < ApplicationController
  def index
    equations = Equation.last(10).map do |equation|
      {
        operand1: equation.operand1,
        operand2: equation.operand2,
        operator: equation.operator,
        solution: equation.solution
      }
    end

    render json: equations
  end

  def create
    equation = Equation.create! equation_params
    render status: :created, json: equation
  end

  private

  def equation_params
    params.require(:equation).permit(
      :id,
      :operator,
      :operand1,
      :operand2
    )
  end
end
