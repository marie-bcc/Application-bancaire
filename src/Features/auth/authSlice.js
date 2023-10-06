import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth", 
    initialState:{
        token: localStorage.getItem("token") || null, 
        isLoading: false, 
        error: null, 
    }, 
    reducers:{
        logInstart: (state) => {
            state.isLoading= true; 
            state.error = null;
        }, 

        logInSucess: (state, action) => {
            state.token = action.payload.token;
            state.isLoading = false;
            state.error = null;
        }, 

        logInFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }, 

        logOut: (state) => {
            state.token = null;
        }
    }
})

export const {logInstart, logInSucess, logInFailure, logOut} = authSlice.actions;
export default authSlice.reducer;

export const selectToken = (state) => state.auth.token;

