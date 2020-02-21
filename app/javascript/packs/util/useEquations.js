import Rails from '@rails/ujs'

Rails.start()

const useEquations = () => {
  const createNew = ({ operand1, operand2, operator }, onSuccess) =>
    Rails.ajax({
      type: 'POST',
      url: '/api/equations',
      dataType: 'json',
      data: `operand1=${operand1}&operand2=${operand2}&operator=${operator}`,
      success: onSuccess,
      error: res => alert(res.errors),
    })

  const getEquations = callback =>
    Rails.ajax({
      type: 'GET',
      url: '/api/equations',
      success: callback,
      error: res => alert('Unable to perform that operation'),
    })

  return { createNew, getEquations }
}

export default useEquations
