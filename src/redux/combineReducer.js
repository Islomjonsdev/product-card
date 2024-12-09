import { combineReducers } from "redux";
import { likeReducer } from "./rootReducer";
const joinedReducer = combineReducers({
    joinedCart: likeReducer
})

export default joinedReducer