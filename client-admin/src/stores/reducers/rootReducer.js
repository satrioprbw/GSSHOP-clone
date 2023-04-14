import { combineReducers } from "redux"
import gameReducer from "./gameReducer"
import platformReducer from "./platformReducer"
import userReducer from "./userReducer"

export default combineReducers({
  game: gameReducer,
  platform: platformReducer,
  user: userReducer
})