import React from 'react';


export const LoginForm = () => {
    return(
        <section className="overlay">
        <div className="auth">
            <div className="auth__close">&times;</div>
            <div className="auth__form">
                <div className="auth__wrapper">
                    <form>
                        <input type="text" className="auth__phone" placeholder="Номер телефона"/>
                        <input type="text" className="auth__pwd" placeholder="Пароль"/>
                        <a href="/" className="auth__forgot">Забыли пароль?</a>
                    </form>
                    
                    <button className="auth__action-btn"><span>Войти</span></button>
                    <button className="auth__alt-btn"><span>Зарегистрироваться</span></button>
                </div>
            </div>
            <img className="auth__icon" src="icons/log_in_window.png" alt=""/>
        </div>
    </section>
    )
}