import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/Layout/Layout'
import User from '@/Pages/Admin/User/User';
import { Home, Error, Login } from './Index'

/**
 * Composant pour la configuration des routes publiques de l'application.
 * @component
 * @returns {JSX.Element} - Le composant PublicRouter.
 */
const PublicRouter = () => {
    return (
        <Routes>
            {/* Utilisation du composant Layout pour fournir une mise en page commune */}
            <Route element={<Layout />}>
                {/* Redirection vers la page d'accueil par défaut */}
                <Route path="" element={<Navigate to="/home" />} />
                {/* Route pour la page d'accueil */}
                <Route path="/home" element={<Home />} />
                {/* Route pour la page d'utilisateur (temporaire) */}
                <Route path="/user" element={<User />} />
                {/* Route pour la page de connexion */}
                <Route path="/login" element={<Login />} />
                {/* Route pour la page d'erreur par défaut */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
