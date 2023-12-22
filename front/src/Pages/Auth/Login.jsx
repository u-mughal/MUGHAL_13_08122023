import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './Login.css'
import { useState } from "react";
import axios from "axios";
import { accountService } from "@/_Services/AccountService";

const Login = () => {

    let navigate = useNavigate();
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');

    const [credentials, setCredentials] = useState({
        email: 'tony@stark.com',
        password: 'password123'
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        axios.post('http://localhost:3001/api/v1/user/login', credentials)
            .then(res => {
                console.log(res)
                accountService.saveToken(res.data.acces_token)
                navigate('/user')
            })
            .catch(error => console.log(error))
    }
    
    return (
        <>
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Login</label>
                    <input type="text" name="email" id="email" value={credentials.email} onChange={onChange} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
        </>
    );
};

export default Login;