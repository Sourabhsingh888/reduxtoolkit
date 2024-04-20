import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        loginRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }

});

export const { loginRequest, loginSuccess, loginFailure } = LoginSlice.actions;

export default LoginSlice.reducer;