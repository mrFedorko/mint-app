import React, { Component } from "react";

import './mainPage.scss'

export default class MainPage extends Component{

    render = () => {
        return(
            <div className="mainPage">
                <section className="promo">
                <div class="container">
                    <div class="content">
                        <div class="content__text">
                            <h1 class="content__title">Рекламно- производственная  компания  “Мята”</h1>
                            <div class="content__title-mini">РПК “Мята”</div>
                            <h2 class="content__subtitle">Каждый день работаем для Вас</h2>
                        </div>
                        <div class="content__img"><img src="img/hand.png" alt=""/></div>
                    </div>

                </div>
                </section>
                
                <section class="advantage">
                    <div class="container">
                        <div class="services">
                            <div class="services__item">
                                <a href="/">
                                    <div class="services__item-title">Объемные <br/> буквы</div>
                                    <img src="img/letters.png" alt="" class="services__item-img"/>
                                </a>
                            </div>
                            <div class="services__item">
                                <a href="/">
                                    <div class="services__item-title">УФ печать</div>
                                    <div class="services__item-img"><img src="img/uv-printer.png" alt=""/></div>
                                </a>
                            </div>
                            <div class="services__item">
                                <a href="/">
                                    <div class="services__item-title">Полиграфия</div>
                                    <div class="services__item-img"><img src="img/booklet.png" alt=""/></div>
                                </a>
                            </div>
                            <div class="services__item">
                                <a href="/">
                                    <div class="services__item-title">Дизайн</div>
                                    <div class="services__item-img"><img src="img/lamp.png" alt=""/></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="why">
                            <div class="why__title">Почему Мята?</div>
                            <div class="why__wrapper">
                                
                                    <div class="why__block">
                                        Мы используем только качественные материалы, проверенные временем
                                    </div>
                                    <div class="why__block">
                                        Цены на услуги ниже средних, гибкая система скидок
                                    </div>
                                    <div class="why__block">
                                        Сострудничать с нами <br/> удобно и приятно,<br/>работаем без выходных  
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </section>
                <section class="depiction">
                    <div class="container">
                        <div class="depiction__cards">
                            <div class="depiction__card">
                                <div class="depiction__title">Заказывайте товары и услуги прямо на сайте</div>
                                <div class="depiction__img"><img src="icons/basket.png" alt="basket"/></div>
                            </div>
                            <div class="depiction__card">
                                <div class="depiction__title">Следите за статусом заказа в личном кабинете</div>
                                <div class="depiction__img"><img src="icons/track.png" alt="track"/></div>
                            </div>
                            <div class="depiction__card">
                                <div class="depiction__title">Рассчитывайте стоимость любой услуги онлайн</div>
                                <div class="depiction__img"><img src="icons/calculate.png" alt="calculate"/></div>
                            </div>
                            <div class="depiction__card">
                                <div class="depiction__title">Чат поддержки 24/7</div>
                                <div class="depiction__img"><img src="icons/chat.png" alt="chat"/></div>
                            </div>
                            <div class="depiction__card">
                                <div class="depiction__title">Документооборот через личный кабинет</div>
                                <div class="depiction__img"><img src="icons/doc.png" alt="doc"/></div>
                            </div>
                            <div class="depiction__card">
                                <div class="depiction__title">Скидки при заказе через сайт</div>
                                <div class="depiction__img"><img src="icons/PRESENT.png" alt="present"/></div>
                            </div>
                        </div>
                        <button class="depiction__button">
                            <a href="/">Сотруд- <br/> ничать</a>
                        </button>
                    </div>
                </section>
                
                <section class="portfolio">
                    <div class="container">
                        <div class="portfolio__text">
                            <h2 class="portfolio__header">Интересно наглядно <br/>
                                посмотреть, <br/>
                                чем мы занимаемся?<br/>
                                Тогда Вам сюда!
                            </h2>
                            <img class="portfolio__arrow" src="img/arrow.svg" alt="arrow"/>
                        </div>
                        <a href="/" class="portfolio__cases">
                            <div class="portfolio__link">Наши<br/>кейсы</div>
                            <img class="portfolio__play" src="icons/play.png" alt=""/>
                        </a>
                    </div>
                </section>
                <section class="footer">
                    <div class="footer__info">
                        <adress class="footer__addr">Белгород
                        </adress>
                        <a href="tel:89524346863" class="footer__phone">+7 952 4346863 </a>
                        <div class="footer__social">
                            <a href="/" class="footer__social-item"><img src="icons/vk.png" alt="vk"/></a>
                            <a href="/" class="footer__social-item"><img src="icons/telegram.png" alt="telegram"/></a>
                            <a href="/" class="footer__social-item"><img src="icons/viber.png" alt="viber"/></a>   
                            <a href="/" class="footer__social-item"><img src="icons/whatsapp.png" alt="whatsapp"/></a>     
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}