import { createSlice } from "@reduxjs/toolkit";

let initialState={
    products:[],
    newProducts:[],
    count:0,
}

let incrementSlice=createSlice({
    name:'incrementSlice',
    initialState,
    reducers: {
        setProducts:(state,action)=>{
            action.type="SET_PRODUCTS",
            state.products=action.payload;
        },
        Increment:(state, action)=>{
            state.products[action.payload].quantity=state.products[action.payload].quantity+1;
        },
        Decrement:(state, action)=>{
            state.products[action.payload].quantity=state.products[action.payload].quantity-1;
        },
        AddToCart:(state, action)=>{
            state.newProducts.push(action.payload)
            state.count=state.count+1;
        }
    }
});

export const {Increment, Decrement,setProducts,AddToCart}=incrementSlice.actions;
export default incrementSlice.reducer;
