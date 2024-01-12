/**
 * Module contenant les fonctions liées à l'authentification utilisateur.
 * @module Auth_Service
 */
import axios from "axios";
import { loginFail, loginSuccess, logoutSuccess, isToken } from "@/Redux/Slices/LoginSlice";
import { userFail, userLogout, userSuccess, userUpdateFail, userUpdateSuccess } from "@/Redux/Slices/UserSlice";

/** URL de base pour les requêtes API. */
const BASE_URL = "http://localhost:3001/api/v1";


/**
 * Effectue une tentative de connexion utilisateur.
 * @function
 * @param {string} email - L'adresse e-mail de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @param {boolean} rememberMe - Indique si l'utilisateur souhaite rester connecté.
 * @returns {Promise} - Une promesse qui se résout avec les données de la réponse.
 */
const login = (email, password, rememberMe) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
      .then((response) => {
        if (rememberMe) {
          localStorage.setItem("token", JSON.stringify(response.data.body.token));
        } else {
          sessionStorage.setItem("token", JSON.stringify(response.data.body.token));
        }
        dispatch(loginSuccess(response.data));
        return response.data;
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          // Si la réponse contient un objet valide avec une propriété de message
          dispatch(loginFail(err.response.data.message));
        } else {
          // Si la réponse est indéfinie ou ne possède pas les propriétés attendues
          dispatch(loginFail('Une erreur s\'est produite lors de la connexion'));
        }
      });
  };
  
  /**
   * Récupère le profil de l'utilisateur.
   * @function
   * @param {string} value_token - Le token d'authentification de l'utilisateur.
   * @returns {Promise} - Une promesse qui se résout avec les données de la réponse.
   */
  const userProfile = (value_token) => (dispatch) => {
    const token = localStorage.getItem("token") !== null ?
      localStorage.getItem("token").slice(1, localStorage.getItem("token").length - 1) :
      value_token;
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
      .then((response) => {
        dispatch(userSuccess(response.data));
        dispatch(isToken());
      })
      .catch((err) => {
        dispatch(userFail(err.response));
      });
  };
  
  /**
   * Met à jour le profil de l'utilisateur.
   * @function
   * @param {string} firstName - Le nouveau prénom de l'utilisateur.
   * @param {string} lastName - Le nouveau nom de l'utilisateur.
   * @param {string} value_token - Le token d'authentification de l'utilisateur.
   * @returns {Promise} - Une promesse qui se résout avec les données de la réponse.
   */
  const updateProfile = (firstName, lastName, value_token) => (dispatch) => {
    const token = localStorage.getItem("token") !== null ?
      localStorage.getItem("token").slice(1, localStorage.getItem("token").length - 1) :
      value_token;
    axios.put(BASE_URL + "/user/profile",
      { firstName: firstName, lastName: lastName },
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((res) => {
        dispatch(userUpdateSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userUpdateFail(err.response));
      });
  };
  
  /**
   * Déconnecte l'utilisateur.
   * @function
   * @returns {void}
   */
  const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token');
    dispatch(userLogout());
    dispatch(logoutSuccess());
  };
  
  /** Objet contenant toutes les fonctions d'authentification. */
  const auth_service = { login, logout, userProfile, updateProfile };
  
  export default auth_service;