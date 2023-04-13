import { combineReducers } from "redux"
import gameReducer from "./gameReducer"
import platformReducer from "./platformReducer"

export default combineReducers({
  game: gameReducer,
  platform: platformReducer
})