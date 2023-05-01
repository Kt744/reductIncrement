import { createSlice } from "@reduxjs/toolkit";

let initialState={
    products:[],
}

let incrementSlice=createSlice({
    name:'incrementSlice',
    initialState,
    reducers: {
        setProducts:(state,action)=>{
            action.type="SET_PRODUCTS",
            state.products=action.payload;
            // console.log(state.products)
        },
        Increment:(state, action)=>{
            console.log(action.payload)
            console.log(state.products)
        },
        Decrement:(state, action)=>{
            console.log(action.payload) 
        },
    }
});

export const {Increment, Decrement,setProducts}=incrementSlice.actions;
export default incrementSlice.reducer;
