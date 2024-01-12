import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './Login.css'
import { useState, useEffect } from "react";
import auth_service from "@/_Services/AccountService";
import { useSelector, useDispatch } from 'react-redux'

/**
 * Composant représentant la page de connexion.
 * @component
 * @returns {JSX.Element} - Le composant Login.
 */
const Login = () => {
    // State pour gérer l'e-mail, le mot de passe et l'option "Remember Me"
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [password, setPassword] = useState(localStorage.getItem('password') || '');
    const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true' || false);

    // Utilisation du hook useDispatch pour envoyer des actions Redux
    const dispatch = useDispatch();
    // Hook de navigation pour rediriger l'utilisateur après la connexion
    const navigate = useNavigate();

    // Récupération du token et de l'erreur depuis le Redux store
    const token = useSelector((state) => state.login.token)
    const error = useSelector((state) => state.login.error)

    // Fonction pour soumettre le formulaire de connexion
    const submitForm = (e) => {
        e.preventDefault();

        // Enregistrement de l'e-mail, du mot de passe et de l'option "Remember Me" dans le localStorage
        if (rememberMe) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('rememberMe', rememberMe);
        } else {
            // Suppression des valeurs du localStorage si l'utilisateur ne souhaite pas les conserver
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
        }

        // Appel de l'action Redux pour la connexion
        dispatch(auth_service.login(email, password, rememberMe));
    }

    // Effet de côté pour rediriger l'utilisateur vers la page utilisateur après la connexion réussie
    useEffect(() => {
        if (token !== null || localStorage.getItem('token') !== null) {
            navigate('/User')
        }
    }, [token, navigate])

    return (
        <>
        {/* Contenu de la page de connexion */}
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            {/* Formulaire de connexion */}
            <form onSubmit={(e)=>{submitForm(e)}}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value)}} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked) }}/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/* Bouton de connexion */}
                <button className="sign-in-button" type='submit'>Sign In</button>
                {/* Affichage de l'erreur s'il y en a une */}
                {error !== null ? <label className='error'>{error}</label> : ""}
            </form>
        </section>
        </>
    );
};

export default Login;
