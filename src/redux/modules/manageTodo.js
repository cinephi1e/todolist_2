import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initail state
const initialState = {
  initialList: [],
  isLoading: false,
  error: null,
};

export const getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __addTodo = createAsyncThunk(
//   "addTodo", // action value
//   (payload, thunkAPI) => {
//     // 콜백함수(컴포넌트에서 보내는 payload, thunk에서 제공하는 여러 기능)
//     setTimeout(() => {
//       thunkAPI.dispatch(addTodo(payload));
//     }, 1000);
//   }
// );

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

  extraReducers: {
    [getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.initialList = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = manageTodo.actions;
export default manageTodo.reducer;
