/**
 * Module contenant les fonctions de service liées aux utilisateurs.
 * @module UserService
 */

import accountinfo from "@/Assets/Api/Accountinfo.json";

/**
 * Récupère les informations d'un utilisateur en fonction de son identifiant.
 * @function
 * @async
 * @param {string} userId - L'identifiant de l'utilisateur à rechercher.
 * @throws {Error} - Une erreur est levée si l'utilisateur n'est pas trouvé.
 * @returns {Promise<Object>} - Une promesse qui se résout avec les informations de l'utilisateur.
 */
const getUser = async (userId) => {
    try {
        // Recherche de l'utilisateur dans les données de compte
        const user = accountinfo.find((user) => user.userId === userId);
        return user;
    } catch (error) {
        // Lève une erreur si l'utilisateur n'est pas trouvé
        throw new Error("Utilisateur non trouvé");
    }
};

/**
 * Service utilisateur contenant la fonction pour récupérer les informations d'un utilisateur.
 * @namespace
 * @property {function} getUser - Fonction pour récupérer les informations d'un utilisateur.
 */
export const userService = {
    getUser,
};
