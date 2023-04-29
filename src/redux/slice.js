import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {},
        decrement: (state, action) => {},
        incrementByAmount: (state, action) => {},
    },
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
