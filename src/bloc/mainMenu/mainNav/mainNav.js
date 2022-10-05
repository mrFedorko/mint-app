import React, { Component } from "react";
import {Link} from "react-router-dom"

import './mainNav.scss'

export default class MainNav extends Component{
    
    state = {
        wide: false
    }
    
    render = () => {
        const wide = this.props.wide;
        return(
            wide ? <MenuWide/> : <Menu/>
        )
    }
}

const Menu = () => {
    
        return(
            <div class="menu show" >
                    <nav>
                        <ul class="menu__list">
                            <li class="menu__item"><Link to="/" class="menu__link" > <img src="./icons/main.png" alt="main"/><span>Главная</span></Link></li>
                            <li class="menu__item"><Link to="/signs" class="menu__link" > <img src="./icons/sign.png" alt="sign"/><span>Вывески</span></Link></li>
                            <li class="menu__item"><Link to="/uvprint" class="menu__link" > <img src="./icons/uv.png" alt="uv"/><span>УФ печать</span></Link></li>
                            <li class="menu__item"><Link to="/polygraphy" class="menu__link" > <img src="./icons/poligrafy.png" alt="poligrafy"/><span>Полиграфия</span></Link></li>
                            <li class="menu__item"><Link to="/design" class="menu__link" > <img src="./icons/design.png" alt="design"/><span>Дизайн</span></Link></li>
                        </ul>
                    </nav>
            </div>
        )
    
}

const  MenuWide = () => {
    return (
            <div class="wide">
                    <nav>
                        <ul class="wide__list">
                            <li class="wide__item">
                                <Link to="/" class="wide__link-main mt-2" >Главная</Link>
                            </li>
                            <li class="wide__item">
                                <Link to="/signs" class="wide__link-main pb-0" >Вывески</Link>
                                <Link to="/signs" class="wide__link" >Объемные буквы</Link>
                                <Link to="/signs" class="wide__link" >Таблички</Link>
                                <Link to="/signs" class="wide__link pb-3" >Калькулятор вывески</Link>
                            </li>
                            <li class="wide__item">
                                <Link to="/uvprint" class="wide__link-main" >УФ печать</Link>
                            </li>
                            <li class="wide__item">
                                <Link to="/polygraphy" class="wide__link-main pb-0" >Полиграфия</Link>
                                <Link to="/polygraphy" class="wide__link" >Заказ онлайн</Link>
                                <Link to="/polygraphy" class="wide__link" >Доставка</Link>
                                <Link to="/polygraphy" class="wide__link pb-3" >Дополнительные услуги</Link>
                            </li>
                            <li class="wide__item">
                                <Link to="/design" class="wide__link-main" >Дизайн</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        )
}