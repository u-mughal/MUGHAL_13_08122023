import { Routes, Route } from "react-router-dom";
import Error from "../Error";
import User from "./User/User";

/**
 * Composant représentant le routeur pour les pages d'administration.
 * @component
 * @returns {JSX.Element} - Le composant AdminRouter.
 */
const AdminRouter = () => {
    return (
        <Routes>
            {/* Route pour la page utilisateur */}
            <Route path="/user" element={<User />} />
            {/* Route par défaut pour gérer les erreurs d'URL inconnue */}
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AdminRouter;