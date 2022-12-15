import { v4 as uuid } from "uuid";

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const todoButton = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// initail state
const initialState = {
  initialList: [
    { id: uuid(), date: "2022/12/07", todo: "리액트 과제", isDone: true },
    { id: uuid(), date: "2022/12/06", todo: "티켓팅", isDone: false },
    { id: uuid(), date: "2022/12/07", todo: "리액트 심화", isDone: false },
    { id: uuid(), date: "2022/12/13", todo: "신한은행 문의", isDone: false },
  ],
};

// reducer
const manageTodo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      return {
        initialList: [...state.initialList, action.payload],
      };
    }
    case DELETE_TODO: {
      return {
        initialList: [action.payload],
      };
    }
    default:
      return state;
  }
};

export default manageTodo;
