import React from 'react'

import useCalculator from '../util/useCalculator'
import '../../../assets/stylesheets/calculator'

const Calculator = () => {
  const {
    validInputs,
    validOperators,
    addToOperand,
    updateOperator,
    components: { operand1, operand2, operator, operatorSymbol },
  } = useCalculator()

  const operandDisplay =
    operand1 && operand2 !== null && operator ? operand2 : operand1

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
        <button className="key">=</button>
      </div>
    </div>
  )
}

export default Calculator
