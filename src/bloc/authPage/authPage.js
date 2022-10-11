import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from '../../hooks/auth.hook';

import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';
import { authCh, registerCh } from '../../store/authSlice';


import "./authPage.scss"
import { Link } from 'react-router-dom';



const AuthPage = () =>  {
    const dispatch = useDispatch();
    const {isRegister, email, password, name} = useSelector(state => state.auth);
    const {request, login} = useAuth();


    const loginHandler = async () =>  {
        try {
            const {token, userId} = await request('http://localhost:8000/api/auth/login', 'POST', {email, password}, {'Content-Type': 'application/json'});
            login(token, userId);
            dispatch(authCh(!!token));

        } catch (error) {
            throw new Error(error.message)
        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:8000/api/auth/register', 'POST', {email, password, name}, {'Content-Type': 'application/json'});
            if (data){dispatch(registerCh())};
            console.log(data.message)

            

            } catch (error) {
                throw new Error(error)
            }
        }
    


    return (
        <section className="overlay">
        <div className="auth">
            <div className="auth__close"><Link className='auth__close-link' to = '/'>&times;</Link></div>
            <div className="auth__form">
            {isRegister ? <RegisterForm registerHandler = {registerHandler}/> : <LoginForm loginHandler = {loginHandler}/>}
            </div>
            <img className="auth__icon" src="icons/log_in_window.png" alt=""/>
        </div>
        </section>
    )
       
    
}
 
export default AuthPage;


