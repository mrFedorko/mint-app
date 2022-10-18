import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../hooks/request.hook';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

import PolygraphyCalc from '../polygraphy/polygraphyCalculator';



const NewOrder = () => {
    const request = useRequest();
    const {orName, orType, orDetails, orQuan, orComent, orExpDate, orLayout, orDelivery} = useSelector(state => state.order);
    const auth = useContext(AuthContext)
    
    const createOrderHandler = async () => {
        const body = {
            name: orName,
            type: orType,
            details: orDetails,
            quan: orQuan,
            comment: orComent,
            date: Date.now(),
            expDate: orExpDate,
            layout: orLayout
        }

        console.log(body)
        await request('http://localhost:8000/api/order/create/', "POST", {...body, status: 'created'}, {"Content-Type" : 'application/json', Authorization: `Bearer ${auth.token}`});
        
    }
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
                <PolygraphyOrder/>

            </div>
            
        </div>
    )
}

const PolygraphyOrder= () => {
    return(
        <div className="polygraphy-order">
            <div className="polygraphy-order__close">&times;</div>
            <div className="polygraphy-order__window">
                <h2 className="polygraphy-order__heading">Оформление  заказа</h2>
                <h3 className="polygraphy-order__title">Параметры</h3>

                <div className="polygraphy-order__content">
                    <div className="polygraphy-order__parametr-item">Визитки</div>
                    <div className="polygraphy-order__parametr-item">90x50мм(стандарт)</div>
                    <div className="polygraphy-order__parametr-item">Бумага мелованная 350 г/м²</div>
                    <div className="polygraphy-order__parametr-item">2000 шт</div>
                    <div className="polygraphy-order__parametr-item">2000 руб</div>
                </div>

                <h3 className="polygraphy-order__title">Название</h3>
                <div className="polygraphy-order__content polygraphy-order__col">
                    <label>Введите название для данного заказа (для удобства ориентирования по заказам)</label>
                    <input type="text" className="polygraphy-order__name" placeholder="Введите название для данного заказа (для удобства ориентирования по заказам) " />
                </div>

                <h3 className="polygraphy-order__title">Макет</h3>
                <div className="polygraphy-order__wrapper">
                    <div className="polygraphy-order__content polygraphy-order__maquette">
                        <div className="polygraphy-order__text">1 сторона</div>
                        <img src="../icons/poligraphy_icons/add.svg" style= {{width: "25px"}} alt="add" className="polygraphy-order__add" />
                        <label>нажмите, чтобы добавить файл</label>
                    </div>
                    <div className="polygraphy-order__content polygraphy-order__maquette">
                    <div className="polygraphy-order__text">2 сторона</div>
                        <img src="../icons/poligraphy_icons/add.svg" style= {{width: "25px"}} alt="add" className="polygraphy-order__add" />
                        <label>нажмите, чтобы добавить файл </label>
                    </div>
                </div>

                <h3 className="polygraphy-order__title">Доставка DPD</h3>
                <div className="polygraphy-order__wrapper">
                    <div className="polygraphy-order__content polygraphy-order__delivery">
                        <div className="polygraphy-order__text">Доставка до пункта выдачи</div>
                        <img src="../icons/poligraphy_icons/box.svg" style= {{width: "25px"}} alt="add" className="polygraphy-order__delivery" />
                    </div>
                    <div className="polygraphy-order__content polygraphy-order__delivery">
                    <div className="polygraphy-order__text">Адресная доставка(курьер)</div>
                        <img src="../icons/poligraphy_icons/delivery-man.svg" style= {{width: "25px"}} alt="add" className="polygraphy-order__delivery" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewOrder