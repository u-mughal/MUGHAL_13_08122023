// Importation de la fonction createSlice depuis le module "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

/**
 * État initial pour la fonctionnalité de connexion.
 * @typedef {Object} LoginState
 * @property {string | null} token - Le jeton d'authentification.
 * @property {boolean} isAuth - Indique si l'utilisateur est authentifié.
 * @property {Error | null} error - Objet d'erreur en cas d'échec de la connexion.
 * @property {boolean | null} logoClick - Indique si le logo a été cliqué.
 */

/** @type {LoginState} */
// Initial login state
const loginState = {
    token: localStorage.getItem("token"),
    isAuth: false,
    error: null,
    logoClick: null,
}

/**
 * Slice pour la gestion de l'état lié à la connexion.
 * @typedef {import("@reduxjs/toolkit").Slice} LoginSlice
 */

/**
 * Actions et reducer pour la gestion de l'état lié à la connexion.
 * @type {LoginSlice}
 */
// Login slices
const loginSlice = createSlice({
    name: "login", // Nom du slice
    initialState: loginState, // État initial
    reducers: {
        /**
         * Action en cas de succès de la connexion.
         * @param {LoginState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données du succès de la connexion.
         */
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token;
            state.isAuth = true;
            state.error = null;
        },
        /**
         * Action en cas d'échec de la connexion.
         * @param {LoginState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données de l'échec de la connexion.
         */
        loginFail: (state, action) => {
            state.token = null;
            state.isAuth = false;
            state.error = action.payload;
        },
        /**
         * Action de déconnexion réussie.
         * @param {LoginState} state - L'état actuel.
         */
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
        /**
         * Action pour indiquer qu'un token est présent.
         * @param {LoginState} state - L'état actuel.
         */
        isToken: (state) => {
            state.isAuth = true;
        },
        /**
         * Action en cas de clic sur le logo.
         * @param {LoginState} state - L'état actuel.
         */
        logoClick: (state) => {
            state.logoClick = true;
        }
    }
})

/** @type {LoginSlice["actions"]} */
// Exportation des actions générées par createSlice
export const { loginSuccess, loginFail, logoutSuccess, isToken, logoClick } = loginSlice.actions;

/** @type {LoginSlice["reducer"]} */
// Exportation du reducer généré par createSlice
export const loginReducer = loginSlice.reducer;
