import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {loadRobots} from './actions'
import {reducers} from './reducers'
 

const LOAD_ROBOTS = 'load robots', LOADED_ROBOTS = 'loaded robots'

const initialState = {
  loading: false,
  robots: []
}

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export {store, initialState, LOAD_ROBOTS, LOADED_ROBOTS}
