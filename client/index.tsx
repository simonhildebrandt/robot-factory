import * as React from 'react'
import ReactDOM from 'react-dom'

function amanda(lastname: string) {
  return lastname
}

function Thing({x}) {
  return <div>Simon {x+1}</div>
}

function install() {
  const el = document.getElementById('main')
  ReactDOM.render(<Thing x={5}/>, el)
}

export {amanda, Thing, install}
