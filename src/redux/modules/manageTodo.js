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
      const response = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTodo = createAsyncThunk(
  "addTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "updateTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3001/todos`);
      const target = response.data.map((item) => {
        if (item.id === payload) {
          return {
            isDone: !item.isDone,
          };
        }
      });
      const i = target.findIndex((item) => item !== undefined);
      await axios.patch(`http://localhost:3001/todos/${payload}`, target[i]);
      const result = await axios.get(`http://localhost:3001/todos`);
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload}`, payload);
      const response = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const manageTodo = createSlice({
  name: "manageTodo",
  initialState,
  reducers: {},
  extraReducers: {
    // 조회
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
    // 추가
    [addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.initialList = [...state.initialList, action.payload];
    },
    [addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 취소/완료
    [updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.initialList = action.payload;
    },
    [updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 삭제
    [deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.initialList = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default manageTodo.reducer;
