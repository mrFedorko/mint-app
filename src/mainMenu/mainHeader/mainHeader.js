import React, { Component } from "react";


import './mainHeader.scss'


export default class MainHeader extends Component{
    render = () => {
        return (
            <header class="header">

            <div class="header__wrapper1">
                <div class="header__burger" onClick={this.props.onMenuChange}>
                    <div class="header__burger-line"></div>
                    <div class="header__burger-line"></div>
                    <div class="header__burger-line"></div>
                </div>
                <div class="header__logo">
                    <a href="/">
                        <img class="header__logo-green" src="./icons/main_logo.svg" alt="logo"/>
                        <img class="header__logo-white" src="./icons/main_logo-white.svg" alt="logo"/>
                    </a>
                </div>
            </div>

            <div class="header__wrapper2">

                <form action="" method="get" class="header__search">
                    <input name="s" class="header__search-form" placeholder="Поиск..." type="search"/>
                    
                </form>
                

                <button type="button" class="header__contact" href="tel:+79524346863">
                    <a class="header__contact-maxi" href="tel:+79524346863">+7 952 4346863</a>
                    <a class="header__contact-mini" href="tel:+79524346863">
                        <img src="./icons/phone-yellow.svg" alt="logo"/>
                    </a>
                </button>
                <a href="index.html" class="header__login">
                    <div class="header__login-text">Войти</div>
                    <div class="header__login-block">
                        <img src="./icons/log_in_icon.png" alt="logo"/>
                    </div>
                </a>
                <a href="index.html" class="header__login-mini">
                    <div class="header__login-block-mini">
                        <img src="./icons/login-yellow.svg" alt="logo"/>
                    </div>
                </a>
            </div>
        </header>

        )
    }
}