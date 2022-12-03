import React from 'react';
import {Link} from 'react-router-dom';
import './sideNav.scss';



const SideNavNarrow = () => {
    
    return(
        <div className="menu show" >
            <nav>
                <ul className="menu__list">
                    <li className="menu__item"><Link to="/" className="menu__link" > <div className="menu__round"><img src="./icons/naw_icons/main.svg" style= {{width: '25px'}} alt="main"/></div> <span>Главная</span></Link></li>
                    <li className="menu__item"><Link to="/signs" className="menu__link" > <div className="menu__round"><img src="./icons/naw_icons/signs.svg" style= {{width: '27px'}} alt="sign"/></div> <span>Вывески</span></Link></li>
                    <li className="menu__item"><Link to="/uvprint" className="menu__link" > <div className="menu__round"><img src="./icons/naw_icons/uv.svg" style= {{width: '25px'}} alt="uv"/></div> <span>УФ печать</span></Link></li>
                    <li className="menu__item"><Link to="/polygraphy" className="menu__link" > <div className="menu__round"><img src="./icons/naw_icons/poligraphy.svg" style= {{width: '19px'}} alt="poligraphy"/></div> <span>Полиграфия</span></Link></li>
                    <li className="menu__item"><Link to="/design" className="menu__link" > <div className="menu__round"><img src="./icons/naw_icons/design.svg" style= {{width: '26px'}} alt="design"/></div> <span>Дизайн</span></Link></li>
                </ul>
            </nav>
        </div>
    );
    
};

const  SideNavWide = (props) => {

    return (
        <div className="screen" onClick = {(e) => props.hideWide(e.target)}>
            <div className="wide">
                <nav>
                    <ul className="wide__list">
                        <li className="wide__item">
                            <Link to="/personal" className="wide__link-main">Личный кабинет</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/" className="wide__link-main mt-2" >Главная</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/signs" className="wide__link-main pb-0" >Вывески</Link>
                            <Link to="/signs" className="wide__link">Виды вывесок</Link>
                            <Link to="/signs" className="wide__link" >Онлайн калькулятор</Link>
                            <Link to="/signs" className="wide__link pb-3">Как заказть</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/uvprint" className="wide__link-main pb-0" >УФ печать</Link>
                            <Link to="/uvprint" className="wide__link">Продукция</Link>
                            <Link to="/uvprint" className="wide__link pb-3">Онлайн заказ</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/polygraphy" className="wide__link-main pb-0" >Полиграфия</Link>
                            <Link to="/polygraphy" className="wide__link">Виды продукции</Link>
                            <Link to="/polygraphy" className="wide__link pb-3">Онлайн заказ</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/design" className="wide__link-main pb-0" >Дизайн</Link>
                            <Link to="/design" className="wide__link">Виды услуг</Link>
                            <Link to="/design" className="wide__link pb-3">Чек-лист дизайнеру</Link>
                        </li>
                        <li className="wide__item">
                            <Link to="/cases" className="wide__link-main">Кейсы</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export {SideNavNarrow, SideNavWide};