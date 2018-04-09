import * as React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

  render() {
    return <div>XXX</div>
  }
}


function install() {
  const el = document.getElementById('main')
  ReactDOM.render(<App/>, el)
}

export {App, install}
