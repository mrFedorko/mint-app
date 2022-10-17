import React from 'react';
import { useState } from 'react';
import data from '../../../services/polygraphy.json'


const NewOrder = () => {
    
    const [product, setProduct] = useState('');

    
    return(
        <div className="new-order">
            <div className="container">
                <div className="new-order__heading">Новый заказ:</div>
                <div className="new-order__wrapper">
                    <div className="new-order__block">Полиграфия</div>
                    <div className="new-order__block">УФ печать</div>
                    <div className="new-order__block">Баннер</div>
                    <div className="new-order__block">Вывеска</div>    
                </div>
                
                <PolygraphyCalc/>
                
            </div>
        </div>
    )
}

const PolygraphyCalc = () => {

    return(
        <>
            <div className="poligraphy__wrapper">
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Тип продукции</div>
                    <div className="poligraphy__col">
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">Визитки</div>
                        </div>
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/flyer.svg" style= {{width: "25px"}}alt="flyer"/></div>
                            <div className="poligraphy__select-text">Листовки</div>
                        </div>
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/broadsheet.svg" style= {{width: "33px"}} alt="broadsheet"/></div>
                            <div className="poligraphy__select-text">Плакаты</div>
                        </div>
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/postcard.svg" style= {{width: "23px"}} alt="postcard"/></div>
                            <div className="poligraphy__select-text">Открытки</div>
                        </div>
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/booklet.svg" style= {{width: "23px"}} alt="booklett"/></div>
                            <div className="poligraphy__select-text">Буклеты</div>
                        </div>
                        <div className="poligraphy__select">
                            <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/leaflet.svg" style= {{width: "17px"}} alt="leaflet"/></div>
                            <div className="poligraphy__select-text">Лифлеты</div>
                        </div>
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Размер</div>
                    <div className="poligraphy__col">
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">90×50 мм (стандарт)</div>
                        </div>
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card_long.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">180×50 мм (двойная)</div>
                        </div>
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card_wide.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">90×100 мм (двойная)</div>
                        </div>
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">85×55 мм (евровизитка)</div>
                        </div>
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card_long.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">170×55 мм (двойная)</div>
                        </div>
                        <div className="poligraphy__select">
                        <div className="poligraphy__select-img"><img src="../icons/poligraphy_icons/card_wide.svg" style= {{width: "25px"}} alt="card"/></div>
                            <div className="poligraphy__select-text">85×110 мм (двойная)</div>
                        </div>
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Плотность материала</div>
                    <div className="poligraphy__col">
                        <div className="poligraphy__select">Бумага мелованная 350 г/м²</div>
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Тираж</div>
                    <div className="poligraphy__col">
                        <div className="poligraphy__select">500 шт</div>
                        <div className="poligraphy__select">1000 шт</div>
                        <div className="poligraphy__select">2000 шт</div>
                        <div className="poligraphy__select">3000 шт</div>
                        <div className="poligraphy__select">4000 шт</div>
                        <div className="poligraphy__select">5000 шт</div>
                    </div>
                </div>
            </div>
            <div className="poligraphy__result">
                <span className="poligraphy__price">6363 руб</span>
                <button className="poligraphy__go-btn">Продолжить оформление</button>
            </div>
        </>
    )
}

export default NewOrder