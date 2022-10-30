import {  useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../store/authSlice';
import { useLoginMutation } from '../../store/api/authApi';

export const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const [login, {isLoading} ] = useLoginMutation();
    const dispatch = useDispatch();

    const handleLogin = async () =>  {
        try {
            const userData = await login({email, password}).unwrap();
            dispatch(setCredentials({...userData, email}));
            dispatch(isAuthCh(true));
            dispatch(userIdCh(userData));
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    let content;

    // isLoading ?
    // content = 

    return(
        
        <div className="auth__wrapper">
            <form on className=" fadein">
                <input onChange={(e) => setEmail(e.target.value)}  type="email" className="auth__email" placeholder="email" value ={email}/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="auth__pwd" placeholder="Пароль" value = {password}/>
                <a href="/" className="auth__forgot">Забыли пароль?</a>
            </form>
                
            <button onClick={handleLogin} className="auth__action-btn" >Войти</button>
            <button onClick={() => {props.handleIsRegister(false)}} className="auth__alt-btn">Зарегистрироваться</button>
        </div>
            
    );
};