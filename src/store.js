import { configureStore } from '@reduxjs/toolkit'
import {todoReducer} from './reduxSlices/todoSlice'
import {alertReducer} from './reduxSlices/alertSlice'

export const store = configureStore({
  reducer: {
    todoReducer,
    alertReducer
  },
})