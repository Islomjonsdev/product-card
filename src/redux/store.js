import { createStore } from "redux";
import joinedReducer from "./combineReducer";
const store = createStore(joinedReducer)

export { store }