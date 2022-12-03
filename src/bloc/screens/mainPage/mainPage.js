import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './mainPage.scss';

const  MainPage = () => {
    const {isAuth} = useSelector((state) => state.auth)
    console.log(isAuth)

        return(
            <div className="mainPage">
                <section className="promo">
                    <div className="container">
                        <div className="content">
                            <div className="content__text">
                                <h1 className="content__title">Рекламно- производственная  компания  “Мята”</h1>
                                <div className="content__title-mini">РПК “Мята”</div>
                                <h2 className="content__subtitle">Каждый день работаем для Вас</h2>
                            </div>
                            <div className="content__img"><img src="img/hand.png" alt=""/></div>
                        </div>

                    </div>
                </section>
                
                <section className="advantage">
                    <div className="container">
                        <div className="services">
                            <div className="services__item">
                                <Link to="/signs">
                                    <div className="services__item-title">Объемные <br/> буквы</div>
                                    <img src="img/letters.png" alt="" className="services__item-img"/>
                                </Link>
                            </div>
                            <div className="services__item">
                                <Link to="/uvprint">
                                    <div className="services__item-title">УФ печать</div>
                                    <div className="services__item-img"><img src="img/uv-printer.png" alt=""/></div>
                                </Link>
                            </div>
                            <div className="services__item">
                                <Link to="/polygraphy">
                                    <div className="services__item-title">Полиграфия</div>
                                    <div className="services__item-img"><img src="img/booklet.png" alt=""/></div>
                                </Link>
                            </div>
                            <div className="services__item">
                                <Link to="/design">
                                    <div className="services__item-title">Дизайн</div>
                                    <div className="services__item-img"><img src="img/lamp.png" alt=""/></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="why">
                            <div className="why__title">Почему Мята?</div>
                            <div className="why__wrapper">
                                
                                <div className="why__block">
                                        Мы используем только качественные материалы, проверенные временем
                                </div>
                                <div className="why__block">
                                        Цены на услуги ниже средних, гибкая система скидок
                                </div>
                                <div className="why__block">
                                        Сострудничать с нами <br/> удобно и приятно,<br/>работаем без выходных  
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
                <section className="depiction">
                    <div className="container">
                        <div className="depiction__cards">
                            <div className="depiction__card">
                                <div className="depiction__title">Заказывайте товары и услуги прямо на сайте</div>
                                <div className="depiction__img"><img src="icons/basket.png" alt="basket"/></div>
                            </div>
                            <div className="depiction__card">
                                <div className="depiction__title">Следите за статусом заказа в личном кабинете</div>
                                <div className="depiction__img"><img src="icons/track.png" alt="track"/></div>
                            </div>
                            <div className="depiction__card">
                                <div className="depiction__title">Рассчитывайте стоимость любой услуги онлайн</div>
                                <div className="depiction__img"><img src="icons/calculate.png" alt="calculate"/></div>
                            </div>
                            <div className="depiction__card">
                                <div className="depiction__title">Чат поддержки 24/7</div>
                                <div className="depiction__img"><img src="icons/chat.png" alt="chat"/></div>
                            </div>
                            <div className="depiction__card">
                                <div className="depiction__title">Документооборот через личный кабинет</div>
                                <div className="depiction__img"><img src="icons/doc.png" alt="doc"/></div>
                            </div>
                            <div className="depiction__card">
                                <div className="depiction__title">Скидки при заказе через сайт</div>
                                <div className="depiction__img"><img src="icons/PRESENT.png" alt="present"/></div>
                            </div>
                        </div>
                        <button className="depiction__button">
                            <a href="/">Сотрудничать</a>
                        </button>
                    </div>
                </section>
                
                <section className="cases">
                    <div className="container">
                        <div className="cases__text">
                            <h2 className="cases__header">Интересно наглядно <br/>
                                посмотреть, <br/>
                                чем мы занимаемся?<br/>
                                Тогда Вам сюда!
                            </h2>
                            <img className="cases__arrow" src="img/arrow.svg" alt="arrow"/>
                        </div>

                        <div className="cases__link">
                            <a href="/">
                                <div className="cases__link-title">Наши кейсы</div>
                                <div className="cases__link-img"><img src="img/folder.png" alt=""/></div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default MainPage;