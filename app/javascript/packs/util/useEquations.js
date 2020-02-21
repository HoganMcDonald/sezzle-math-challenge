import React from 'react'
import Rails from '@rails/ujs'

Rails.start()

const useEquations = () => {
  const createNew = ({ operand1, operand2, operator }, onSuccess) =>
    Rails.ajax({
      type: 'POST',
      url: '/api/equations',
      dataType: 'json',
      data: `operand1=${operand1}&operand2=${operand2}&operator=${operator}`,
      success: () => {
        getEquations()
        onSuccess()
      },
      error: res => alert(res.errors),
    })

  const getEquations = () =>
    Rails.ajax({
      type: 'GET',
      url: '/api/equations',
      success: res => console.log(res),
      error: res => alert(res.errors),
    })

  return { createNew }
}

export default useEquations
