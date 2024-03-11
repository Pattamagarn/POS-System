import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    isbooth : {status:false}
}

const boothSlice = createSlice({
    name: 'isbooth',
    initialState: initialState,
    reducers:{
        setIsBooth(state,action){
            state.isbooth = action.payload
        }
    }
})

const { action,reducer} = boothSlice
export const { setIsBooth } = action
export default reducer