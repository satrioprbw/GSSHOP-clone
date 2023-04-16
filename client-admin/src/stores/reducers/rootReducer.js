import { combineReducers } from "redux"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import platformReducer from "./platformReducer"

export default combineReducers({
  product: productReducer,
  platform: platformReducer,
  user: userReducer
})