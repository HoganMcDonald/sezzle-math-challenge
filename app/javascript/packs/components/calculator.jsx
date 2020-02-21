import React from 'react'

import useCalculator from '../util/useCalculator'
import '../../../assets/stylesheets/calculator'
import useEquations from '../util/useEquations'

const Calculator = () => {
  const {
    validInputs,
    validOperators,
    addToOperand,
    updateOperator,
    clearInputs,
    components: { operand1, operand2, operator, operatorSymbol },
  } = useCalculator()

  const { createNew } = useEquations()

  const operandDisplay =
    operand1 && operand2 !== null && operator ? operand2 : operand1

  const handleSubmit = () => {
    if (operand1 !== null && operand2 !== null && operator) {
      createNew({ operand1, operand2, operator }, () => clearInputs())
    }
  }

  return (
    <div className="Calculator">
      <h1 className="title">Calculator</h1>
      <div className="display">
        <p>{operandDisplay}</p>
        <p>{operatorSymbol}</p>
      </div>
      <div className="keypad">
        {validInputs.map(input => (
          <button
            className="key"
            key={input}
            onClick={() => addToOperand(input)}>
            {input}
          </button>
        ))}
        {validOperators.map(operator => (
          <button
            className="key"
            key={operator}
            onClick={() => updateOperator(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={handleSubmit} className="key">
          =
        </button>
      </div>
    </div>
  )
}

export default Calculator
