import React from 'react';
import { useState } from 'react';
import { useRegisterMutation } from '../../store/api/registerApi.js'

const ConfirmMessage = () => {
    return(
      <span>Пароли не совпадают</span>
    )
}

export const RegisterForm = (props) => {
     
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [register, {isLoading, isSuccess}] = useRegisterMutation();

    const isMatch = (password === confirm);

    const handleValidation = (args) => {
        const result = args.filter(item => item === '')
        if (result.length){
            return true
        };
        return false
    }
    
    const handleRegister = async () => {
        await register({name, email, password});
        props.handleIsRegister(true);
    }

    return(
        <div className="auth__wrapper">
            <form className=" fadein">
                <input onChange={(e) =>  setName(e.target.value)} type="text" className="auth__name" placeholder="Ваше имя"/>
                <input onChange={(e) =>  setEmail(e.target.value)} type="email" className="auth__phone" placeholder="e-mail"/>
                <input onChange={(e) =>  setPassword(e.target.value)} type="password" className="auth__pwd" placeholder="Придумайте пароль"/>
                <input onChange={(e) => setConfirm(e.target.value)} type="password" className="auth__pwd" placeholder="Повторите пароль"/>
                {confirm && !isMatch && <ConfirmMessage/>}
            </form>
            <br/>
            <button disabled={handleValidation([name, email, password, confirm && isMatch])}  onClick={handleRegister} className="auth__action-btn mt-2"><span>Зарегистрироваться</span></button>
            <button onClick={() => props.handleIsRegister(true)} className="auth__alt-btn"><span>У меня уже есть аккаунт</span></button>
        </div>  
    );
};