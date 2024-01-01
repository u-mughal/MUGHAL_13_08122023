import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
      authToken: "",
      isLogged: false,
      rememberMe: false,
  },
  reducers: {
      setAuthToken: (state, action) => {
          state.authToken = action.payload;
      },
      clearAuthData: (state) => {
          state.isLogged = false;
          state.authToken = "";
          state.rememberMe = false;
      },
  }
})
