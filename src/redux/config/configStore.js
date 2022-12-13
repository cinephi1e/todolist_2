import { createStore } from "redux";
import { combineReducers } from "redux";
import manageTodo from "../modules/manageTodo";

const rootReducer = combineReducers({
  manageTodo,
});
const store = createStore(rootReducer);

export default store;
