import {store, LOAD_ROBOTS, LOADED_ROBOTS} from './store'
import axios from 'axios'


export function loadRobots() {
  axios.get('/robots.json')
  .then(response => store.dispatch({
      type: LOADED_ROBOTS,
      robots: response.data
    })
  )

  return {type: LOAD_ROBOTS}
}
