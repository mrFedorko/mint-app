import React from 'react';

export const RegisterForm = () => {
    return(
        <section className="overlay">
        <div className="auth">
            <div className="auth__close">&times;</div>
            <div className="auth__form">
                <div className="auth__wrapper">
                    <form>
                        <input type="text" className="auth__name" placeholder="Ваше имя"/>
                        <input type="text" className="auth__phone" placeholder="Номер телефона"/>
                        <input type="text" className="auth__pwd" placeholder="Придумайте пароль"/>
                        <input type="text" className="auth__pwd" placeholder="Повторите пароль"/>
                    </form>
                    <br/>
                    <button className="auth__action-btn mt-2"><span>Зарегистрироваться</span></button>
                    <button className="auth__alt-btn"><span>У меня уже есть аккаунт</span></button>
                </div>
            </div>
            <img className="auth__icon" src="icons/log_in_window.png" alt=""/>
        </div>
    </section>
    )
}