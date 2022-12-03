import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../../store/api/authApi';
import { selectCurrentIsAuth } from '../../store/authSlice';


import './header.scss';


const Header = (props) => {
    const [logout, {isLoading}] = useLogoutMutation()
    const {name} = useSelector(state => state.userSettings);
    
    const isAuth = useSelector(selectCurrentIsAuth);
    
    return (
        <header className="header">

            <div className="header__wrapper1">
                <div className="header__burger" onClick={props.onMenuChange}>
                    <div className="header__burger-line"></div>
                    <div className="header__burger-line"></div>
                    <div className="header__burger-line"></div>
                </div>
                <div className="header__logo">
                    <Link to="/">
                        <img className="header__logo-green" src="./icons/main_logo.svg" alt="logo"/>
                        <img className="header__logo-white" src="./icons/main_logo-white.svg" alt="logo"/>
                    </Link>
                </div>
            </div>

            <div className="header__wrapper2">

                <form action="" method="get" className="header__search">
                    <input name="s" className="header__search-form" placeholder="Поиск..." type="search"/>
                    
                </form>
                

                <button type="button" className="header__contact" href="tel:+79524346863">
                    <a className="header__contact-maxi" href="tel:+79524346863">+7 952 4346863</a>
                    <a className="header__contact-mini" href="tel:+79524346863">
                        <img src="./icons/phone-yellow.svg" alt="logo"/>
                    </a>
                </button>
                <Link to="/personal" className="header__login">
                    <div className="header__login-wrapper">
                        <div className="header__login-text">{isAuth && name ? `${name}` : 'войти'}</div>
                        {isAuth ? <div onClick={() => {logout()}} className="header__login-text header__login-text_bold">выйти</div> : <></>}
                    </div>
                    <div className="header__login-block">
                        <img src="./icons/log_in_icon.png" alt="logo"/>
                    </div>
                </Link>
                <Link to="/personal" className="header__login-mini">
                    <div className="header__login-block-mini">
                        <img src="./icons/login-yellow.svg" alt="logo"/>
                    </div>
                </Link>
            </div>
        </header>

    );
    
};
export default Header;