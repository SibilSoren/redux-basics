import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import appleSlice from "./appleSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        apples: appleSlice
    }
})

export default store;