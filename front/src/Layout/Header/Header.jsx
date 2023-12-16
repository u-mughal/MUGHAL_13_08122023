import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/argentBankLogo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <header>
                <nav className="main-nav">
                    <Link to="/home" className="main-nav-logo"><img className="main-nav-logo-image" src={Logo} alt="Logo" /></Link>
                    <div>
                        <Link className="main-nav-item" to="/Login">Sign in</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;