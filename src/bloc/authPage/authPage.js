import React from 'react';

import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';


import "./authPage.scss"
import { useSelector } from 'react-redux';


const AuthPage = () =>  {

    const {isRegister} = useSelector(state => state.auth);
    
    return (
        <section className="overlay">
        <div className="auth">
            <div className="auth__close">&times;</div>
            <div className="auth__form">
            {isRegister ? <RegisterForm/> : <LoginForm/>}
            </div>
            <img className="auth__icon" src="icons/log_in_window.png" alt=""/>
        </div>
        </section>
    )
       
    
}
 
export default AuthPage;


