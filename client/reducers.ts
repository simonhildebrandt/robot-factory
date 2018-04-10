import {initialState, LOAD_ROBOTS, LOADED_ROBOTS} from './store'


export function reducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_ROBOTS:
      return {...state, loading: true}
    case LOADED_ROBOTS:
      return {...state, robots: action.robots, loading: false}
    default:
      return state
  }
}
