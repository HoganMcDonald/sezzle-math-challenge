import React from 'react'
import ReactDOM from 'react-dom'

import Calculator from './components/calculator'
import Layout from './components/layout'

const Home = () => (
  <Layout>
    <Calculator />
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home name="React" />,
    document.body.appendChild(document.createElement('div'))
  )
})
