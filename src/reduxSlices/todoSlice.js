import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: '',
  todos: []
}

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
      state.todos = state.todos.filter((item, index) => index !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleTextChange, addToDo, removeToDo } = todoSlice.actions

export default todoSlice.reducer