import { Link, useNavigate } from "react-router-dom";
import Logo from '@/assets/images/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import auth_service from '@/_Services/AccountService'
import { useDispatch, useSelector } from 'react-redux'
import { logoClick } from '@/Redux/Slices/LoginSlice';
import './Header.css'

/**
 * Composant représentant l'en-tête de l'application.
 * @component
 * @returns {JSX.Element} - Le composant Header.
 */
const Header = () => {
  // Extraction des informations utilisateur et de l'état d'authentification depuis le Redux store
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.login.isAuth)
  // Dispatch pour effectuer des actions Redux
  const dispatch = useDispatch();
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  /**
   * Fonction pour gérer la déconnexion de l'utilisateur.
   * @function
   */
  const onLogout = () => {
    dispatch(auth_service.logout());
    navigate('/');
  }

  /**
   * Fonction pour gérer le clic sur le logo.
   * @function
   */
  const onLogoClick = () => {
    dispatch(logoClick())
  }

  return (
    <nav className="main-nav">
      {/* Logo de l'application avec lien vers la page d'accueil */}
      <Link className="main-nav-logo" onClick={onLogoClick} to="/" >
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {/* Condition pour afficher les éléments de navigation en fonction de l'état d'authentification */}
      {
        isAuth === false ?
          // Affichage des liens de connexion pour les utilisateurs non authentifiés
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
          : isAuth === true ?
            // Affichage des liens de navigation pour les utilisateurs authentifiés
            <div className='main-nav-items'>
              <Link className="main-nav-item" to="/User">
                <i className="fa fa-user-circle"></i> {user.firstName}
              </Link>
              <Link className="main-nav-item" to="/home" onClick={onLogout}>
                <i className="fa fa-sign-out"></i> Sign out
              </Link>
            </div>
            : ""
      }
    </nav>
  )
};

export default Header;
