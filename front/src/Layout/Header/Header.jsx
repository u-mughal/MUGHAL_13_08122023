import { Link, useNavigate } from "react-router-dom";
import Logo from '@/assets/images/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import auth_service from '@/_Services/AccountService'
import { useDispatch, useSelector } from 'react-redux'
import { logoClick } from '@/Redux/Slices/LoginSlice';
import './Header.css'

import './Header.css'

const Header = () => {

    const user= useSelector((state)=> state.user);
    const isAuth= useSelector((state) => state.login.isAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout= () => {
        dispatch(auth_service.logout());
        navigate('/')
    }

    const onLogoClick= () => {
        dispatch(logoClick())
    }
  
  return (
      <nav className="main-nav">
        <Link className="main-nav-logo" onClick={onLogoClick} to="/" >
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {
        isAuth === false ?
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div> 
          : isAuth === true ? 
          <div className='main-nav-items'>
            <Link className="main-nav-item" to="/User"><i className="fa fa-user-circle"></i> {user.firstName} </Link>
            <Link className="main-nav-item" to="/home" onClick={onLogout}><i className="fa fa-sign-out"></i> Sign out </Link>
          </div> : ""
          }
      </nav>
  )
};

export default Header;
