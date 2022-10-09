import React, { useEffect, useId } from "react";
import { useState } from "react";
import { useRef } from "react";
import './pesonal.scss'

const Personal = () => {
    
   

    return(
        <>
            <div className="personal">
                <div className="container">
                    <div className="personal__menu">
                        <div className="personal__menu-item">
                            <img src="icons/profile.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Профиль</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/new_order.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Новый заказ</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/in_work.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Заказы в работе</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/archive.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">История заказов</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/help.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Помощь</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/review.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Оставить отзыв</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/settings.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Настройки</div>
                        </div>
                    </div>
                    <div className="personal__line"></div>
                </div>
                
            </div>
            <div className="profile">
                <div className="container">
                    <div className="profile__info">
                        <div className="profile__info-inner">
                            <div className="profile__name">Татьяна Комарова</div>
                            <div className="profile__usersymbol">✔</div>
                            <div className="profile__status">профиль подтвержден</div>
                        </div>
                        <div className="profile__phone">+79745378466</div>
                    </div>
                    <div className="profile__wrapper">
                        <div className="profile__col">
                            <div className="profile__block">
                                <div className="profile__block-heading">Реквизиты</div>
                                <div className="profile__block-content">
                                    <div className="profile__content-icon"><img src="icons/bag.png" alt=""/></div>
                                    <div className="profile__content-text">
                                        ИП Комарова Т.П. <br /> ИНН 746728346274 <br /> ОГРНИП 6473847347 <br /> Р/с 87356893493489374 <br /> БИК 734578347
                                    </div>
                                </div>
                            </div>
                            <div className="profile__block">
                                <div className="profile__block-heading">Адрес доставки</div>
                                <div className="profile__block-content">
                                    <div className="profile__content-icon"><img src="icons/location.png" alt=""/></div>
                                    <div className="profile__content-text">7382372, г. Белгород <br /> ул.Комара, стр.6</div>
                                </div>
                            </div>
                            <div className="profile__block">
                                <div className="profile__block-heading">Расходы</div>
                                <div className="profile__block-content">
                                    <div className="profile__content-icon"><img src="icons/coins.png" alt=""/></div>
                                    <div className="profile__content-text">Общая сумма заказов: <br /> 3090 руб</div>
                                </div>
                            </div>
                        </div>
                        <div className="profile__masseges">
                        <div className="profile__block-heading">Уведомления</div>
                        </div>
                    </div>
                    

                </div>
            </div>


            <div className="new-order">
                <div className="container">
                    <div className="new-order__heading">Новый заказ:</div>
                    <div className="new-order__wrapper">
                        <div className="new-order__block">Полиграфия</div>
                        <div className="new-order__group">
                            <div className="new-order__little-block">Табличка</div>
                            <div className="new-order__little-block">Баннер</div>
                            <div className="new-order__little-block">Вывеска</div>    
                        </div>
                        <div className="new-order__block">Сайт</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal;