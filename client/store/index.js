import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import checklist from './checklist'
import place from './place'
import budget from './budget'
import trip from './trip'
import note from './note'

const reducer = combineReducers({user, checklist, place, budget, trip, note})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './checklist'
export * from './place'
export * from './budget'
export * from './trip'
export * from './note'
