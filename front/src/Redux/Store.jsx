import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "@/Redux/Slices/LoginSlice";
import { userReducer } from "@/Redux/Slices/UserSlice";

export const store = configureStore({
    reducer: {
      login: loginReducer,
      user: userReducer
    }
  })