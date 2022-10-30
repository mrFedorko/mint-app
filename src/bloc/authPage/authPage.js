import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';

import './authPage.scss';

const AuthPage = () =>  {
    
    const [register, setRegister] = useState(true);
    
    
    const handleIsRegister = (bool) => {
        setRegister(bool)
    }    

    return (
        <section className="overlay">
            <div className="auth">
                <div className="auth__close"><Link className="auth__close-link" to = "/">&times;</Link></div>
                <div className="auth__form">
                    {!register ? <RegisterForm handleIsRegister = {handleIsRegister} /> : <LoginForm handleIsRegister = {handleIsRegister} />}
                </div>
                <img className="auth__icon" src="icons/log_in_window.png" alt=""/>
            </div>
        </section>
    );
       
    
};
 
export default AuthPage;


