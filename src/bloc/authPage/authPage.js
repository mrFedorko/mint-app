import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useRequest } from '../../hooks/request.hook';

import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';
import { registerCh } from '../../store/authSlice';



import "./authPage.scss"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';




const AuthPage = () =>  {
    const dispatch = useDispatch();
    const {isRegister, email, password} = useSelector(state => state.auth);
    const {name} = useSelector(state=> state.userSettings);
    const auth = useContext(AuthContext)
    const request = useRequest();
    


    const loginHandler = async () =>  {
        try {
            const {token, userId} = await request('http://localhost:8000/api/auth/login', 'POST', {email, password}, {'Content-Type': 'application/json'});
            console.log(userId);
            auth.login(token, userId);

            

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


