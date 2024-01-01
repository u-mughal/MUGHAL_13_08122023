import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./UserHeader.css"

const UserHeader = () => {
    const firstName = useSelector(state => state.Login.firstName);
    // const lastName = useSelector(state => state.Login.lastName);
    const dispatch = useDispatch();

    const [editButton, setEditButton] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState(""); // État local pour stocker le prénom en cours d'édition

    const editNameButton = () => {
        setEditedFirstName(firstName);
        setEditButton(true);
    }

    const saveNameButton = (e) => {
        e.preventDefault();
        dispatch({
            type: "Login/changeFirstName",
            payload: editedFirstName
        });
        setEditButton(false);
    }

    const cancelEdit = () => {
        setEditButton(false);
    }

    return (
        <div className="header">
            {editButton ? (
                <form className="editNameContent">
                    <div className="headerUserContentSave">
                        <input
                            className="InputfirstName"
                            type="text"
                            placeholder="Ex: Tony"
                            name="firstName"
                            required
                            value={editedFirstName} // Affiche la valeur en cours d'édition
                            onChange={(e) => setEditedFirstName(e.target.value)}
                        />
                        <button className="secondary-button" onClick={saveNameButton}>
                            Save
                        </button>
                    </div>
                    <div className="headerUserContentCancel">
                        <input
                            className="inputLastName"
                            type="text"
                            placeholder="Ex: Jarvis"
                            name="lastName"
                            required
                        />
                        <button className="secondary-button" onClick={cancelEdit}>
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <h1>Welcome back <br /> {firstName} (non connecté à API)</h1>
                    <button className="edit-button" onClick={editNameButton}>Edit Name</button>
                </>
            )}
        </div>
    );
};

export default UserHeader;
