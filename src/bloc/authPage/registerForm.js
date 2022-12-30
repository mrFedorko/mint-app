import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../store/api/registerApi.js'



export const RegisterForm = (props) => {
     
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [accept, setAccept] = useState(false)

    const [register, {isLoading, isSuccess}] = useRegisterMutation();

    const isMatch = (password === confirm);

    const handleValidation = (args) => {
        const result = args.filter(item => item === '' || item === false)
        if (result.length){
            return false
        };
        return true
    }
    const validationResult = handleValidation([name, email, password , accept, confirm && isMatch])
    const handleRegister = async () => {
        await register({name, email, password});
        props.handleIsRegister(true);
    }


    console.log(accept)
    return(
        <div className="auth__wrapper">
            <form className=" fadein">
                <input onChange={(e) =>  setName(e.target.value)} type="text" className="auth__input" placeholder="Ваше имя"/>
                <input onChange={(e) =>  setEmail(e.target.value)} type="email" className="auth__input" placeholder="e-mail"/>
                <input onChange={(e) =>  setPassword(e.target.value)} type="password" className="auth__input" placeholder="Придумайте пароль"/>
                <input onChange={(e) => setConfirm(e.target.value)} type="password" className="auth__input" placeholder="Повторите пароль"/>
                
                <div className="auth__privacy">
                    <input type="checkbox" className="auth__checkbox" onChange={(e)=>{setAccept(e.target.checked)}}/><div>Я согласен(а) с <Link to="/privacy">политикой конфиденциальности</Link> </div>
                </div>
                <hr style={{margin: "8px 0"}}/>
                {confirm && !isMatch && <><span style={{fontSize: "12px", lineHeight:"12px"}}>Пароли не совпадают</span><br/></>}
                {!validationResult && <span style={{fontSize: "12px", lineHeight:"12px"}}>Введите все данные</span>}
            </form>

            
            <br/>
            <button disabled={!validationResult}  onClick={handleRegister} className="auth__action-btn mt-2"><span>Зарегистрироваться</span></button>
            
            <button onClick={() => props.handleIsRegister(1)} className="auth__alt-btn"><span>У меня уже есть аккаунт</span></button>
        </div>  
    );
};