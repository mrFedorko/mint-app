import React from "react";
import { useState } from "react";
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
            
            
            {/* manu=manufacture */}
            <div className="manu"> 
                <div className="container">
                    <div className="manu__heading">Заказы в работе</div>
                    <div className="manu__strip">
                        <div className="manu__number">300</div>
                        <div className="manu__wrapper">
                            <div className="manu__date">12:57  08.08.2020</div>
                            <div className="manu__info">
                                <div className="manu__icon"><img src="icons/poligrafy_icons/cards.png" alt="" /></div>
                                <div className="manu__definition">
                                    <div className="manu__inner">
                                        <div className="manu__order-name">Визитные карточки 4+4</div>
                                        <div className="manu__order-detales">1000 шт</div>
                                    </div>
                                    <div className="manu__comment">“Визитки для соседа”</div>
                                </div>
                                <div className="manu__control">
                                    <div className="manu__control-group">
                                        <div className="manu__control-parametr">Статус заказа:</div>
                                        <div className="manu__control-value">макет утвержден <br /> ожидание оплаты</div>
                                    </div>
                                    <div className="manu__control-group">
                                        <div className="manu__control-parametr">Дата готовности:</div>
                                        <div className="manu__control-value">до 10 дней после оплаты</div>
                                    </div>
                                </div>
                                <div className="manu__buttons">
                                    <button type="button" class="manu__button" href="/">
                                        <img src="icons/edit.png" alt="edit"/>
                                        Редактировать
                                    </button>
                                    <button type="button" class="manu__button" href="/">
                                        <img src="icons/cansel.png" alt="edit"/>
                                        Отменить
                                    </button>
                                    <button type="button" class="manu__button" href="/">
                                        <div className="manu__sum">2000 руб</div>
                                        <div className="manu__pay">Оплатить</div>
                                    </button>
                                </div>
                                <div className="manu__documents">
                                    <button type="button" class="manu__chek" href="/">Счёт</button>
                                    <button type="button" class="manu__invoice" href="/">Накладная</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Personal;