import React from 'react'
import ReactDOM from 'react-dom'
import { ActionCableProvider } from 'actioncable-client-react'

import Calculator from './components/calculator'
import Layout from './components/layout'
import Output from './components/output'

const Home = () => (
  <ActionCableProvider url="/cable">
    <Layout>
      <Calculator />
      <Output />
    </Layout>
  </ActionCableProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home name="React" />,
    document.body.appendChild(document.createElement('div'))
  )
})
