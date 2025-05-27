import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './login.scss';
import logoImg from '../../../../img/logo.jpg';

const LoginPage = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(userName === 'admin' && password === 'admin1234'){
            login();
            navigate('/admin');
        }
        else{
            alert('Credențiale incorecte!');
        }
    };

    return(
        <div className="container-login">
            <img className="login-logo" src={logoImg} alt="Logo" loading="lazy" />
            <p className="login-title">Admin Panel Login</p>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    className="login-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="username"
                ></input>
                <input
                    type="password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                >
                </input>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );

}
export default LoginPage;