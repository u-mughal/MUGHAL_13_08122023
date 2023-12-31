import { configureStore } from "@reduxjs/toolkit"

import { loginSlice } from "@/redux/loginSlice"
import { authSlice } from "@/redux/authSlice"

export const mainStore = configureStore({
    reducer: {
        Login: loginSlice.reducer,
        Auth: authSlice.reducer,
    }
})