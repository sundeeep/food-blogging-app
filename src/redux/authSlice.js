import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: {
        accessToken: null,
        displayName: null,
        email: null,
        photoURL: null,
        uid: null,
    }
};

export const authSlice = createSlice({
    name: "googleAuth",
    initialState,
    reducers: {
        SIGNIN: (state, action) => {
            if (action.payload) {
                state.userDetails.accessToken = action.payload.accessToken;
                state.userDetails.displayName = action.payload.displayName;
                state.userDetails.email = action.payload.email;
                state.userDetails.photoURL = action.payload.photoURL;
                state.userDetails.uid = action.payload.uid;
                return;
            }
        },
        SIGNOUT: (state) => {
            state.userDetails.accessToken = null;
            state.userDetails.displayName = null;
            state.userDetails.email = null;
            state.userDetails.photoURL = null;
            state.userDetails.uid = null;
        },
    },
});

export const { SIGNIN, SIGNOUT } = authSlice.actions;

export default authSlice.reducer;
