import React from "react";
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
                            <div className="personal__item-title">Оставить отзывы</div>
                        </div>
                        <div className="personal__menu-item">
                            <img src="icons/settings.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Настройки</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal;