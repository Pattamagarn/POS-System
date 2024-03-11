import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : {status:false}
}

const transactionSlice = createSlice({
    name:'product',
    initialState : initialState,
    reducers : {
        addProduct(state,action){
            state.product = action.payload
        },
        incrementProduct(state,action){
            console.log(action.payload)
            state.product = action.payload +1
        },
        decrementProduct(state,action){
            console.log(action.payload)
            state.product = action.payload - 1
        },
        setTotalPrice(state,action){
            state.push({
                totalPrice : action.payload.totalPrice,
                point : action.payload.point,
            })
        }
    }
})

const {actions,reducer} = transactionSlice
export const {addProduct,setTotalPrice,incrementProduct,decrementProduct} = actions
export default reducer