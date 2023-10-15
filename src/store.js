import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reduxSlices/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})