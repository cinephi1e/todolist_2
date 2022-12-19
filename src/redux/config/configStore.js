import manageTodo from "../modules/manageTodo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { manageTodo },
});

export default store;
