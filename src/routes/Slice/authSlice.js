import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },

    loginUser: (state, action) => {
      if (
        state.user &&
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.isAuthenticated = true;
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { registerUser, loginUser, logout } = authSlice.actions;
export default authSlice.reducer;