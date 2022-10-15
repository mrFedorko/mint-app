import React from 'react';
import { useDispatch } from 'react-redux';

import { registerCh, passwordCh, emailCh } from '../../store/authSlice';
import { nameCh } from '../../store/userSettingsSlice';

export const RegisterForm = ({registerHandler}) => {
     
    const dispatch = useDispatch()
    
    const confirmPassword = (e) => {
        return e.target.value
    } 
    
    return(
                <div className="auth__wrapper">
                    <form className=' fadein'>
                        <input onChange={(e) =>  dispatch(nameCh(e.target.value))} type="text" className="auth__name" placeholder="Ваше имя"/>
                        <input onChange={(e) =>  dispatch(emailCh(e.target.value))} type="email" className="auth__phone" placeholder="e-mail"/>
                        <input onChange={(e) =>  dispatch(passwordCh(e.target.value))} type="password" className="auth__pwd" placeholder="Придумайте пароль"/>
                        <input onChange={confirmPassword} type="confirmPassword" className="auth__pwd" placeholder="Повторите пароль"/>
                    </form>
                    <br/>
                    <button onClick={registerHandler} className="auth__action-btn mt-2"><span>Зарегистрироваться</span></button>
                    <button onClick={() => dispatch(registerCh(false))} className="auth__alt-btn"><span>У меня уже есть аккаунт</span></button>
                </div>  
    )
}