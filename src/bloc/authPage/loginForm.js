import React from 'react';
import { useDispatch } from 'react-redux';

import { registerCh } from '../../store/authSlice';


export const LoginForm = () => {

    const dispatch = useDispatch();

    return(
        
                <div className="auth__wrapper">
                    <form className=' fadein'>
                        <input type="text" className="auth__phone" placeholder="Номер телефона"/>
                        <input type="password" className="auth__pwd" placeholder="Пароль"/>
                        <a href="/" className="auth__forgot">Забыли пароль?</a>
                    </form>
                    
                    <button className="auth__action-btn"><span>Войти</span></button>
                    <button onClick={() => dispatch(registerCh())} className="auth__alt-btn"><span>Зарегистрироваться</span></button>
                </div>
            
    )
}