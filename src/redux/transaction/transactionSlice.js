import { createSlice } from "@reduxjs/toolkit";

const INIT_DATA = []

const transactionSlice = createSlice({
    name:'product',
    initialState : INIT_DATA,
    reducers : {
        addProduct(state,action){
            state.push({
                product : action.payload.product,
                amount : action.payload.amount
            })
        },
        setTotalPrice(state,action){
            state.push({
                totalPrice : action.payload.totalPrice,
                point : action.payload.point,
            })
        }
    }
})

const {action,reducer} = transactionSlice
export const {addProduct,setTotalPrice} = action
export default reducer