class Equation < ActiveRecord::Base
  enum operator: { addition: 0, subtraction: 1, multiplication: 2, division: 3 }

  validates_presence_of :operand1, :operand2, :operator

  validate :no_divide_by_zero

  def solution
    if addition?
      operand1 + operand2
    elsif subtraction?
      operand1 - operand2
    elsif multiplication?
      operand1 * operand2
    elsif division?
      operand1 / operand2
    end
  end

  private

  def no_divide_by_zero
    if division? && operand2 == 0
      errors.add :operator, 'Cannot divide by 0.'
    end
  end
end
