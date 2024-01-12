import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from '@/Redux/Store.jsx';
import './main.css';

/**
 * Fonction principale pour initialiser l'application React.
 * @function
 * @name renderApp
 * @param {string} rootElementId - L'identifiant de l'élément DOM racine où l'application React sera rendue.
 * @returns {void}
 */

/**
 * Fonction principale pour initialiser l'application React.
 * @param {string} rootElementId - L'identifiant de l'élément DOM racine où l'application React sera rendue.
 */
function renderApp(rootElementId) {
  // Utilisation de la méthode createRoot pour créer une racine React dans l'élément DOM spécifié
  ReactDOM.createRoot(document.getElementById(rootElementId)).render(
    // StrictMode pour des vérifications supplémentaires en mode de développement
    <React.StrictMode>
      {/* Utilisation du composant Provider pour fournir le magasin Redux à l'application */}
      <Provider store={store}>
        {/* Composant principal de l'application */}
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

// Appel de la fonction pour initialiser l'application dans l'élément DOM avec l'identifiant 'root'
renderApp('root');
