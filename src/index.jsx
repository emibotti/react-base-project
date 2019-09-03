/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import ReactDOM from 'react-dom'
import { TestingContainer } from './scenes/TestingContainer'

class App extends React.Component {
  render() {
    return <TestingContainer />
  }
}

ReactDOM.render(<App />, document.getElementById('mount'))
