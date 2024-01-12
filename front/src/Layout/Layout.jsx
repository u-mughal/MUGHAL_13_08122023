import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

/**
 * Composant représentant la mise en page générale de l'application.
 * @component
 * @returns {JSX.Element} - Le composant Layout.
 */
const Layout = () => {
    const location = useLocation(); // Obtenez l'URL actuelle

    // Vérifiez si l'URL est "/user" pour décider si la classe "bg-dark" doit être ajoutée
    const isUserPage = location.pathname === '/User';
    const isLoginPage = location.pathname === '/login';
    const mainClass = isUserPage || isLoginPage ? 'bg-dark' : '';

    return (
        <div className="layout">
            <Header />
            {/* Zone de rendu pour les composants enfants définis dans les routes */}
            <main className={mainClass}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
