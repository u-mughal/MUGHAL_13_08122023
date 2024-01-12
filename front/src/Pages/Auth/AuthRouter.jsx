import { Route, Routes } from "react-router-dom"
import Error from "@/Pages/Error";
import Login from "./Login";

/**
 * Composant représentant le routeur pour les pages d'authentification.
 * @component
 * @returns {JSX.Element} - Le composant AuthRouter.
 */
const AuthRouter = () => {
    return (
        <Routes>
            {/* Route par défaut et route pour la page de connexion */}
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            {/* Route par défaut pour gérer les erreurs d'URL inconnue */}
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AuthRouter;
