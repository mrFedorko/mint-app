import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerCh, emailCh, passwordCh } from '../../store/authSlice';


export const LoginForm = (props) => {

    const dispatch = useDispatch();
    const {email, password} = useSelector(state=> state.auth);


    return(
        
                <div className="auth__wrapper">
                    <form on className=' fadein'>
                        <input onChange={(e) => dispatch(emailCh(e.target.value))}  type="email" className="auth__email" placeholder="email" value ={email}/>
                        <input onChange={(e) => dispatch(passwordCh(e.target.value))} type="password" className="auth__pwd" placeholder="Пароль" value = {password}/>
                        <a href="/" className="auth__forgot">Забыли пароль?</a>
                    </form>
                
                    <button onClick={() =>  props.loginHandler({email, password})} className="auth__action-btn" >Войти</button>
                    <button onClick={() => dispatch(registerCh(true))} className="auth__alt-btn">Зарегистрироваться</button>
                </div>
            
    )
}