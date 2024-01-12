import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import auth_service from '@/_Services/AccountService';

import "./UserHeader.css"

/**
 * Composant représentant l'en-tête utilisateur.
 * @component
 * @returns {JSX.Element} - Le composant UserHeader.
 */
const UserHeader = () => {
    // Extraction des informations utilisateur et du token depuis le Redux store
    const user = useSelector((state) => state.user);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    // State pour gérer l'état d'édition
    const [edit, showEdit] = useState(false);

    // Dispatch pour effectuer des actions Redux
    const dispatch = useDispatch();

    // Extraction du token depuis le Redux store
    const token = useSelector((state) => state.login.token);

    // States pour les nouveaux prénom et nom lors de l'édition
    const [newFirstName, setFirstName] = useState('');
    const [newLastName, setLastName] = useState('');

    /**
     * Fonction pour soumettre le formulaire d'édition du nom.
     * @function
     * @param {Object} e - L'événement de soumission du formulaire.
     */
    const submit = (e) => {
        e.preventDefault();
        // Appel de la fonction de mise à jour du profil avec les nouveaux prénom et nom
        dispatch(auth_service.updateProfile(newFirstName, newLastName, token));
        // Désactivation du mode édition
        showEdit(false);
    }

    /**
     * Effet de côté pour charger le profil utilisateur lorsqu'il y a un token valide.
     * @function
     */
    useEffect(() => {
        if (token !== null) {
            dispatch(auth_service.userProfile(token))
        }
    }, [token, dispatch]);

    return (
        <div className="header">
            {/* Affichage du message de bienvenue avec le prénom et le nom de l'utilisateur */}
            <h1>Welcome back<br />{edit === false ? firstName + ' ' + lastName : ""}</h1>
            {/* Condition pour afficher le bouton "Edit Name" ou le formulaire d'édition */}
            {
                edit === false ?
                    <button className="edit-name-button" onClick={() => { showEdit(true) }}>Edit Name</button>
                    :
                    <form className='edit-inputs-buttons' onSubmit={submit}>
                        {/* Formulaire d'édition avec deux champs d'entrée pour le prénom et le nom */}
                        <div className='edit-inputs'>
                            <input type="text" className='edit-input' onChange={(e) => { setFirstName(e.target.value) }} placeholder={user.firstName} required />
                            <input type="text" className='edit-input' onChange={(e) => { setLastName(e.target.value) }} placeholder={user.lastName} required />
                        </div>
                        {/* Boutons "Save" et "Cancel" pour confirmer ou annuler l'édition */}
                        <div className='edit-buttons'>
                            <button className='edit-button-option' type='submit'>Save</button>
                            <button className='edit-button-option' onClick={() => { showEdit(false) }}>Cancel</button>
                        </div>
                    </form>
            }
        </div>
    )
}

export default UserHeader;
