import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "Auth",
    initialState: {
        token: "",
        isLogged: false,
        rememberMe: false,
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
          },
          //stocke l'etat de connexion
          setIsLoggedIn: (state, action) => {
            state.isLogged = action.payload;
          },
          clearAuthData: (state) => {
            state.isLogged = false;
            state.authToken = null;
            state.rememberMe = false;
            // Réinitialisez d'autres propriétés d'état liées à l'authentification si nécessaire
          },  
          //stocke si il a cocher la case remember me 
          setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
          },
    }
})