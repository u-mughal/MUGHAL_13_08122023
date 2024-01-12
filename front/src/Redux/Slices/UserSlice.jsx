// Importation de la fonction createSlice depuis le module "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

/**
 * État initial pour la fonctionnalité liée à l'utilisateur.
 * @typedef {Object} UserState
 * @property {string | null} email - L'adresse e-mail de l'utilisateur.
 * @property {string | null} firstName - Le prénom de l'utilisateur.
 * @property {string | null} lastName - Le nom de famille de l'utilisateur.
 * @property {string | null} id - L'identifiant de l'utilisateur.
 * @property {Object | null} error - Objet d'erreur en cas d'échec des opérations liées à l'utilisateur.
 * @property {string} error.message - Message d'erreur.
 */

/** @type {UserState} */
// Initial user state
const userState = {
    email: null,
    firstName: null,
    lastName: null,
    id: null,
    error: null,
}

/**
 * Slice pour la gestion de l'état lié à l'utilisateur.
 * @typedef {import("@reduxjs/toolkit").Slice} UserSlice
 */

/**
 * Actions et reducer pour la gestion de l'état lié à l'utilisateur.
 * @type {UserSlice}
 */
// User slices
const userSlice = createSlice({
    name: "user", // Nom du slice
    initialState: userState, // État initial
    reducers: {
        /**
         * Action en cas de succès des opérations liées à l'utilisateur.
         * @param {UserState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données du succès.
         */
        userSuccess: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = null;
        },
        /**
         * Action en cas d'échec des opérations liées à l'utilisateur.
         * @param {UserState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données de l'échec.
         */
        userFail: (state, action) => {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.id = null;
            state.error = {
                message: action.payload.message,
                // Vous pouvez sérialiser d'autres informations si nécessaire
                // par exemple, serializeData: JSON.stringify(action.payload.serializeData),
            };
        },
        /**
         * Action de déconnexion de l'utilisateur.
         * @param {UserState} state - L'état actuel.
         */
        userLogout: (state) => {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.id = null;
            state.error = null;
        },
        /**
         * Action en cas de succès de la mise à jour des informations de l'utilisateur.
         * @param {UserState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données du succès de la mise à jour.
         */
        userUpdateSuccess: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = null;
        },
        /**
         * Action en cas d'échec de la mise à jour des informations de l'utilisateur.
         * @param {UserState} state - L'état actuel.
         * @param {import("@reduxjs/toolkit").PayloadAction} action - L'action avec les données de l'échec de la mise à jour.
         */
        userUpdateFail: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = action.payload.message;
        }
    }
})

/** @type {UserSlice["actions"]} */
// Exportation des actions générées par createSlice
export const { userSuccess, userFail, userLogout, userUpdateSuccess, userUpdateFail } = userSlice.actions;

/** @type {UserSlice["reducer"]} */
// Exportation du reducer généré par createSlice
export const userReducer = userSlice.reducer;
