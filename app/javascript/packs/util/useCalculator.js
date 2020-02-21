import React from 'react'

const useCalculator = () => {
  const [operand1, setOperand1] = React.useState(null)
  const [operand2, setOperand2] = React.useState(null)
  const [operator, setOperator] = React.useState(null)

  const validOperators = {
    '+': 'addition',
    '-': 'subtraction',
    '*': 'multiplication',
    '/': 'division',
  }

  const validInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  const concatDigits = (a, b) => {
    // casting to number then string ensures "null" is treated as 0
    return parseInt(Number(a).toString() + b.toString(), 10)
  }

  const clearInputs = () => {
    setOperand1(null)
    setOperand2(null)
    setOperator(null)
  }

  const addToOperand = digit => {
    if (operator === null) {
      const newValue = concatDigits(operand1, digit)
      setOperand1(newValue)
    } else {
      const newValue = concatDigits(operand2, digit)
      setOperand2(newValue)
    }
  }

  const updateOperator = symbol => {
    if (operand1 !== null) setOperator(validOperators[symbol])
  }

  return {
    components: {
      operand1,
      operand2,
      operator,
      operatorSymbol: Object.keys(validOperators).find(
        key => validOperators[key] === operator
      ),
    },
    addToOperand,
    validInputs,
    validOperators: Object.keys(validOperators),
    updateOperator,
    clearInputs,
  }
}

export default useCalculator
