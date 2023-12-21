import { Link } from "react-router-dom";
import Logo from '@/assets/images/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css';

import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/home" className="main-nav-logo"><img className="main-nav-logo-image" src={Logo} alt="Logo" /></Link>
                <div>
                <Link className="main-nav-item" to="/Login"><i className="fa fa-user-circle"></i> Sign in </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;