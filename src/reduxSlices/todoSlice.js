import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { apiUrl } from '../constants';

const initialState = {
  text: '',
  todos: []
}

export const fetchToDoAsync = createAsyncThunk(
  "todo/fetchToDoAsync",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

export const deleteToDoAsync = createAsyncThunk(
  "todo/deleteToDoAsync",
  async (payload) => {
    if(!payload.id) return { error: 'record id not passed' }
    const response = await axios.delete(`${apiUrl}/${payload.id}`);
    return payload;
  }
);

export const addToDoAsync = createAsyncThunk(
  "todo/addToDoAsync",
  async (payload) => {
    const response = await axios.post(`${apiUrl}`, payload);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    handleTextChange: (state, action) => {
      state.text = action.payload
    },
    addToDo: (state, action) => {
      state.todos.push(state.text)
      state.text = ''
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((item, index) => item.id !== action.payload.id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDoAsync.fulfilled, (state, action) => {
        state.todos = action.payload.slice(0,5)
      })
      .addCase(addToDoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload)
        state.text = ''
      })
      .addCase(deleteToDoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter(item => item.id !== action.payload.id)
      })
  }
})

export const todoReducer = todoSlice.reducer

export const { handleTextChange, addToDo, removeToDo } = todoSlice.actions

export const todoSelector = state => state.todoReducer
