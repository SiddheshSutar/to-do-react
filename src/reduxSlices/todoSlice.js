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
  },
})

// Action creators are generated for each case reducer function
export const { handleTextChange, addToDo } = todoSlice.actions

export default todoSlice.reducer