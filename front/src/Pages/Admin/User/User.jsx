import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Account from "@/Components/Account/Account";
import UserHeader from "@/Components/UserHeader/UserHeader"
import { userService } from "@/_Services/UserService.jsx";

/**
 * Composant représentant la page utilisateur avec les informations du profil.
 * @component
 * @returns {JSX.Element} - Le composant User.
 */
const User = () => {
    // State pour stocker les données utilisateur
    const [userData, setUserData] = useState(null);
    // Récupération de l'adresse e-mail de l'utilisateur depuis le Redux store
    const userEmail = useSelector((state) => state.user.email);

    // State pour stocker l'identifiant de l'utilisateur connecté
    const [userLogged, setUserLogged] = useState(null);

    // Effet de côté pour charger les données utilisateur lorsque l'adresse e-mail change
    useEffect(() => {
        // Attribution de l'identifiant d'utilisateur en fonction de l'adresse e-mail
        if (userEmail === "tony@stark.com") {
            setUserLogged("user01");
        } else if (userEmail === "steve@rogers.com") {
            setUserLogged("user02");
        }

        // Appel du service pour obtenir les informations détaillées de l'utilisateur
        if (userLogged) {
            userService.getUser(userLogged)
                .then((res) => setUserData(res))
                .catch((err) => console.log(err));
        }
    }, [userEmail, userLogged]);

    return (
        <>
            {/* En-tête de l'utilisateur affichant le nom de l'utilisateur en fonction du statut d'édition */}
            <UserHeader />
            {/* Affichage des comptes de l'utilisateur si les données sont disponibles */}
            {userData && (
                <div key={userData.userId}>
                    {userData.account.map((account) => (
                        <Account
                            key={account.id}
                            title={account.titleAccount}
                            total={account.totalAccount}
                            type={account.typeOfAccount}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default User;
