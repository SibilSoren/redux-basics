import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apples: 50
}

const appleSlice = createSlice({
    name: "apple",
    initialState,
    reducers: {
        addApple: (state) => {
            state.apples++
        },
        sellApple: (state) => {
            state.apples--
        }
    }
});

export const { addApple, sellApple } = appleSlice.actions;
export default appleSlice.reducer
