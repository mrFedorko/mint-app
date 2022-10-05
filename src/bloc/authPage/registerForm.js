import React from 'react';
import { useDispatch } from 'react-redux';

import { registerCh } from '../../store/authSlice';


export const RegisterForm = () => {
     
    const dispatch = useDispatch()
    
    return(
        


                <div className="auth__wrapper">
                    <form className=' fadein'>
                        <input type="text" className="auth__name" placeholder="Ваше имя"/>
                        <input type="email" className="auth__phone" placeholder="e-mail"/>
                        <input type="password" className="auth__pwd" placeholder="Придумайте пароль"/>
                        <input type="password" className="auth__pwd" placeholder="Повторите пароль"/>
                    </form>
                    <br/>
                    <button className="auth__action-btn mt-2"><span>Зарегистрироваться</span></button>
                    <button onClick={() => dispatch(registerCh())} className="auth__alt-btn"><span>У меня уже есть аккаунт</span></button>
                </div>


            
    )
}