import {LOAD_ROBOTS, LOADED_ROBOTS} from './store'
import axios from 'axios'


export function loadRobots() {

  return function(dispatch) {
    dispatch({type: LOAD_ROBOTS})

    return axios.get('/robots.json')
    .then(response => {
      dispatch({
        type: LOADED_ROBOTS,
        robots: response.data
      })
    })
  }
}
