import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        googleAuth: authReducer,
    },
});
