import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    isLoading: false,
    error: null,
    userName: "",
  },
  reducers: {
    logInStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    logInSuccess: (state, action) => {
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
    },

    userLoginSucess: (state, action) => {
      console.log("Action payload:", action.payload);
      console.log("Payload for userLoginSuccess:", action.payload);

      state.userName = action.payload.userName;
    },
  },
});

export const {
  logInStart,
  logInSuccess,
  logInFailure,
  logOut,
  userLoginSucess,
} = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state) => state.auth.token;
export const selectUserName = (state) => state.auth.userName;
