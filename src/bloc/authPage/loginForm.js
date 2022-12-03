import {  useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../store/authSlice';
import { useLoginMutation } from '../../store/api/authApi';
import { sMessageCh } from '../../store/sMessageSlice';

export const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const [login, {isLoading} ] = useLoginMutation();
    const dispatch = useDispatch();

    const handleLogin = async () =>  {
        if(!email || !password){
            dispatch(sMessageCh('Введите e-mail и пароль'));
            return
        }
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


    return(
        
        <div className="auth__wrapper">
            <form on className=" fadein">
                <input onChange={(e) => setEmail(e.target.value)}  type="email" className="auth__email" placeholder="email" value ={email}/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="auth__pwd" placeholder="Пароль" value = {password}/>
                <a href="/" className="auth__forgot">Забыли пароль?</a>
            </form>
                
            <button onClick={handleLogin} className="auth__action-btn" >Войти</button>
            <button onClick={() => {props.handleIsRegister(0)}} className="auth__alt-btn">Зарегистрироваться</button>
        </div>
            
    );
};