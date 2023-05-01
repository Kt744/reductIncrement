import { configureStore } from "@reduxjs/toolkit";

import incrementReducer from './incrementSlice'

let store = configureStore({reducer:{increment:incrementReducer}});

export default store;

