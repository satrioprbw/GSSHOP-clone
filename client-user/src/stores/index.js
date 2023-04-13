import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store