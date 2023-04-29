import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
    name: "googleAuth",
    initialState,
    reducers: {
        SIGNIN: (state, action) => {},
        SIGNOUT: (state, action) => {},
    },
});

export const { SIGNIN, SIGNOUT } = authSlice.actions;

export default authSlice.reducer;
