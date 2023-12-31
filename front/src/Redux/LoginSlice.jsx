import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "Login",
    initialState: {
        firstName: "John",
        lastName: "Doe"
    },
    reducers: {
        changeFirstName: (state, action) => {
            state.firstName = action.payload
        },
        changeLastName: (state, action) => {
            state.lastName = action.payload
        },
    }
})