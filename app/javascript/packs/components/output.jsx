import React from 'react'
import { ActionCable } from 'actioncable-client-react'

import useEquations from '../util/useEquations'
import '../../../assets/stylesheets/output'

const Output = () => {
  const [equations, setEquations] = React.useState([])
  const { getEquations } = useEquations()

  React.useEffect(() => {
    getEquations(res => setEquations(res))
  }, [])

  const handleReceived = message => setEquations(message)

  const humanReadableOperator = operator => {
    switch (operator) {
      case 'addition':
        return '+'
      case 'subtraction':
        return '-'
      case 'multiplication':
        return '*'
      case 'division':
        return '/'
    }
  }

  return (
    <div className="Output">
      <ActionCable
        channel={'RecentEquationsChannel'}
        room={1}
        onReceived={handleReceived}
      />
      <h2 className="title">Past Equations</h2>
      {equations.map(({ operand1, operand2, operator, solution }, index) => (
        <div key={index}>
          {operand1} {humanReadableOperator(operator)} {operand2} = {solution}
        </div>
      ))}
    </div>
  )
}

export default Output
