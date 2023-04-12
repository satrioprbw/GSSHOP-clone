import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store

