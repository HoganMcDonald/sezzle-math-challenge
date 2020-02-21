import React from 'react'

import useCalculator from '../util/useCalculator'
import '../../../assets/stylesheets/calculator'

const Calculator = () => {
  const {
    validInputs,
    validOperators,
    components,
    addToOperand,
    updateOperator,
  } = useCalculator()

  const operandDisplay =
    components.operand1 && components.operand2 && components.operator
      ? components.operand2
      : components.operand1

  return (
    <div className="Calculator">
      <h1 className="title">Calculator</h1>
      <div className="display">
        <p>{operandDisplay}</p>
        <p>{components.operatorSymbol}</p>
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
      </div>
    </div>
  )
}

export default Calculator
