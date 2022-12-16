import { v4 as uuid } from "uuid";

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// action creator
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const updateTodo = (id) => {
  return {
    type: UPDATE_TODO,
    id,
  };
};

// initail state
const initialState = {
  initialList: [
    { id: uuid(), date: "2022/12/15", todo: "후발대 과제", isDone: true },
    { id: uuid(), date: "2022/12/16", todo: "안과 방문", isDone: false },
    { id: uuid(), date: "2022/12/16", todo: "리액트 심화 과제", isDone: true },
    { id: uuid(), date: "2022/12/16", todo: "신한은행 문의", isDone: false },
  ],
};

// reducer
const manageTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        initialList: [...state.initialList, action.newTodo],
      };
    }
    case DELETE_TODO: {
      return {
        initialList: state.initialList.filter(
          (todo) => todo["id"] !== action.id
        ),
      };
    }

    case UPDATE_TODO: {
      return {
        initialList: state.initialList.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    }

    default:
      return state;
  }
};

export default manageTodo;
