import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../routes/Slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});