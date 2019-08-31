/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-less/semantic.less'
import { Header } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return <Header as="h1">Semantic UI LESS!</Header>
  }
}

ReactDOM.render(<App />, document.getElementById('mount'))
