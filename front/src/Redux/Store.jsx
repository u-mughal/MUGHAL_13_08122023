// Importation de la fonction configureStore depuis le module "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";
// Importation du reducer de la slice de connexion (login)
import { loginReducer } from "@/Redux/Slices/LoginSlice";
// Importation du reducer de la slice d'utilisateur (user)
import { userReducer } from "@/Redux/Slices/UserSlice";

/**
 * Configuration du magasin Redux.
 * @typedef {import("@reduxjs/toolkit").EnhancedStore} ReduxStore
 */

/** @type {ReduxStore} */
// Création du magasin Redux en configurant les reducers pour la slice de connexion (login) et la slice d'utilisateur (user)
export const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer
    }
});
