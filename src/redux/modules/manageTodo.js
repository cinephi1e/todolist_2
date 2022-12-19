import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// initail state
const initialState = {
  initialList: [
    { id: uuid(), date: "2022/12/15", todo: "후발대 과제", isDone: true },
    { id: uuid(), date: "2022/12/16", todo: "안과 방문", isDone: false },
    { id: uuid(), date: "2022/12/16", todo: "리액트 심화 과제", isDone: true },
    { id: uuid(), date: "2022/12/16", todo: "신한은행 문의", isDone: false },
  ],
};

const manageTodo = createSlice({
  name: "manageTodo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.initialList = [...state.initialList, action.payload];
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.initialList = state.initialList.filter(
        (todo) => todo["id"] !== action.payload
      );
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      state.initialList = state.initialList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = manageTodo.actions;
export default manageTodo.reducer;
