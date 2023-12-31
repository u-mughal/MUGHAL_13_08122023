import { Link, useLocation } from "react-router-dom";
import Logo from '@/assets/images/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import { accountService } from '@/_Services/AccountService.jsx'
import { useSelector } from 'react-redux'

import './Header.css'

const Header = () => {

    const par = useSelector(state => state.Login);

    // Obtenez l'URL actuelle
    const location = useLocation();

    // Vérifiez si l'URL correspond à la page "User"
    const isUserPage = location.pathname === "/user";

    const logout = () => {
        accountService.logout()
    }

    return (
        <header>
            <nav className="main-nav">
                <Link to="/home" className="main-nav-logo"><img className="main-nav-logo-image" src={Logo} alt="Logo" /></Link>
                <div>
                    {isUserPage ? (
                        <>
                        <Link className="main-nav-item" to="/"><i className="fa fa-user-circle"></i> {par.firstName} </Link>
                        <Link className="main-nav-item" to="/home" onClick={logout}><i className="fa fa-sign-out"></i> Sign out </Link>
                        </>
                    ) : (
                        <Link className="main-nav-item" to="/Login"><i className="fa fa-user-circle"></i> Sign in </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
