import { createSlice } from '@reduxjs/toolkit'
import { addToDoAsync, fetchToDoAsync } from './todoSlice';
import { toastTimeout } from '../constants';
import { toast } from 'react-toastify';


const INITIAL_STATE = {
    fetchToDosStatus: null,
    addToDoStatus: null,
};

export const alertSlice = createSlice({
    name: 'alert',
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state, action) => {
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDoAsync.pending, (state, action) => {
                console.log('hex: ', state.fetchToDosStatus)
                state.fetchToDosStatus = 'loading'
            })
            .addCase(fetchToDoAsync.fulfilled, (state, action) => {
                state.fetchToDosStatus = 'completed'
            })
            .addCase(addToDoAsync.pending, (state, action) => {
                state.addToDoStatus = 'loading'
            })
            .addCase(addToDoAsync.fulfilled, (state, action) => {
                state.addToDoStatus = 'completed'

            })
    }
})

export const alertReducer = alertSlice.reducer

export const {reset} = alertSlice.actions

export const alertSelector = state => state.alertReducer
