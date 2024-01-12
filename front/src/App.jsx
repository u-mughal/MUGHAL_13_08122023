// Importation des composants de routage depuis le module 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importation du composant de routage pour l'administration
import AdminRouter from '@/Pages/Admin/AdminRouter.jsx';
// Importation du composant de routage pour l'authentification
import AuthRouter from '@/Pages/Auth/AuthRouter.jsx';
// Importation du composant de routage public
import PublicRouter from '@/Pages/Public/PublicRouter.jsx';

/**
 * Fonction principale représentant l'application React.
 * @function
 * @name App
 * @returns {JSX.Element} Composant React représentant l'application.
 */

/**
 * Composant racine de l'application.
 * @returns {JSX.Element} Composant React représentant l'application.
 */
function App() {
  return (
    // Conteneur principal de l'application
    <div className='App'>
      {/* Utilisation du composant BrowserRouter pour gérer la navigation */}
      <BrowserRouter>
        {/* Utilisation du composant Routes pour définir les itinéraires */}
        <Routes>
          {/* Itinéraire pour les pages publiques */}
          <Route path="/*" element={<PublicRouter />} />
          {/* Itinéraire pour les pages d'authentification */}
          <Route path="/Auth/*" element={<AuthRouter />} />
          {/* Itinéraire pour les pages d'administration */}
          <Route path="/Admin/*" element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exportation du composant App en tant que composant par défaut
export default App;
