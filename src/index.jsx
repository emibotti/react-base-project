/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return <Header as="h1">Added Semantic UI!</Header>
  }
}

ReactDOM.render(<App />, document.getElementById('mount'))
