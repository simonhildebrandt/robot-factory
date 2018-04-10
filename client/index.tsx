import * as React from 'react'
import ReactDOM from 'react-dom'
import {store, LOAD_ROBOTS} from './store'
import {loadRobots} from './actions'


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.unsubscribeStoreListener = store.subscribe(this.forceUpdate.bind(this))

    store.dispatch(loadRobots())
  }

  componentWillUnmount() {
    this.unsubscribeStoreListener()
  }

  render() {
    const state = store.getState()

    function loadingMessage() {
      return <em>loading robots...</em>
    }

    return <div>
      <h1>Robot Factory</h1>
      { state.loading && loadingMessage() }
      { !state.loading && RobotList({robots: state.robots}) }
    </div>
  }
}

function RobotList({robots}) {
  const bool = v => v ? 'true' : 'false'

  return <table>
    <thead>
      <tr><th>Name</th><th>Sentient?</th><th>Wheels?</th><th>Tracks?</th><th>Rotors</th><th>Colour</th><th>Statuses</th></tr>
    </thead>
    <tbody>
      { robots.map(robot =>
        <tr key={robot.id}>
          <td>{robot.name}</td>
          <td>{bool(robot.configuration.hasSentience)}</td>
          <td>{bool(robot.configuration.hasWheels)}</td>
          <td>{bool(robot.configuration.hasTracks)}</td>
          <td>{bool(robot.configuration.numberOfRotors)}</td>
          <td>{robot.configuration.Colour}</td>
          <td>{robot.statuses.join(', ')}</td>
        </tr>
      ) }
    </tbody>
  </table>
}


function install() {
  const el = document.getElementById('main')
  ReactDOM.render(<App/>, el)
}

export {App, install}
