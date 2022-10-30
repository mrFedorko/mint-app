import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../hooks/request.hook';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth.context';

import PolygraphyCalc from '../polygraphy/polygraphyCalculator';





const NewOrder = () => {
    const [active, setActive] = useState('');
    const [resume, setResume] = useState(false)

    const request = useRequest();
    const {orName, orType, orDetails, orQuan, orComent, orExpDate, orLayout, orDelivery} = useSelector(state => state.order);
    const auth = useContext(AuthContext)

    const createOrderHandler = async () => {
        const body = {
            name: orName,
            details: orDetails,
            type: orType,
            layout: orLayout,
            expDate: orExpDate,
            comment: orComent,
            quan: orQuan,
            date: Date.now(),
        }
        await request('http://localhost:8000/api/order/create/', "POST", {...body, status: 'created'}, {"Content-Type" : 'application/json', Authorization: `Bearer ${auth.token}`});
            console.log(body)
    
        
    }

    const handlerResume = (v) => {
        setResume(v)
    }

    let content = {
        'uv': <PolygraphyCalc/>,
        'polyg': {calc: <PolygraphyCalc handlerResume = {handlerResume}/>, order: <PolygraphyOrder handlerResume = {handlerResume}/>},
        'banner': <PolygraphyCalc/>,
        'sign': <PolygraphyCalc/>,
        'no': <></>

    }
    return(
        <div className="new-order">
            <div className="container">
                <div className="new-order__heading">Новый заказ:</div>
                <div className="new-order__wrapper">
                    <div className={active !== 'polyg' ? 'new-order__block' : 'new-order__block new-order__block_active'} onClick={() =>  setActive('polyg')}>Полиграфия</div>
                    <div className={active !== 'uv' ? 'new-order__block' : 'new-order__block new-order__block_active'} onClick={() =>  setActive('uv')}>УФ печать</div>
                    <div className={active !== 'banner' ? 'new-order__block' : 'new-order__block new-order__block_active'} onClick={() =>  setActive('banner')}>Баннер</div>
                    <div className={active !== 'sign' ? 'new-order__block' : 'new-order__block new-order__block_active'} onClick={() =>  setActive('sign')}>Вывеска</div>    
                </div>
                
                {active && content[active].calc}
                {resume && content[active].order}

                
            </div>
            
        </div>
    )
}

const PolygraphyOrder= (props) => {
    
    const [delivery, setDelivery] = useState('');
    
    return(
        <div className="polygraphy-order">
            <div className="polygraphy-order__close" onClick={() => props.handlerResume(false)}>&times;</div>
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
                    <label>Необходимо для удобства ориентирования по заказам</label>
                    <input type="text" className="polygraphy-order__name" placeholder="Введите название для данного заказа" />
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
                    <div className={delivery === 'point' ? "polygraphy-order__content polygraphy-order__delivery polygraphy-order__delivery_active" : "polygraphy-order__content polygraphy-order__delivery"} onClick={()=>setDelivery('point')}>
                        <div className="polygraphy-order__text">Доставка до пункта выдачи</div>
                        <img src="../icons/poligraphy_icons/box.svg" style= {{width: "25px"}} alt="add"/>
                    </div>
                    <div className={delivery === 'adress' ? "polygraphy-order__content polygraphy-order__delivery polygraphy-order__delivery_active" : "polygraphy-order__content polygraphy-order__delivery"} onClick={()=>setDelivery('adress')}>
                        <div className="polygraphy-order__text">Адресная доставка (курьер)</div>
                        <img src="../icons/poligraphy_icons/delivery-man.svg" style= {{width: "25px"}} alt="add"/>
                    </div>
                </div>

                {delivery === 'point' ? <PickPointDelivery/> : 
                delivery === 'adress' ? <AdressDelivery/> :
                ''}
               

            </div>
        </div>
    )
}

const PickPointDelivery = () => {
    return(
        <div className="polygraphy-order__delivery-details">
        <div class="polygraphy-order__delivery-setting">
            <label className="polygraphy-order__delivery-attribute">Выберите город</label>
            <select class="polygraphy-order__delivery-select" id="">
                <option defaultValue=""/>
                <option value="ООО">Белгород</option>
                <option value="ИП">Щебекино</option>
                <option value="АО">Валуйки</option>
            </select>
        </div>
        <div class="polygraphy-order__delivery-setting">
            <label className="polygraphy-order__delivery-attribute">Выберите пункт выдачи</label>
            <select class="polygraphy-order__delivery-select" id="">
                <option defaultValue=""/>
                <option value="ООО">Белгород</option>
                <option value="ИП">Щебекино</option>
                <option value="АО">Валуйки</option>
            </select>
        </div>
    </div>
    )
};

const AdressDelivery = () => {
    return(
        <div className="polygraphy-order__delivery-details">
        <div class="polygraphy-order__delivery-setting">
            <label className="polygraphy-order__delivery-attribute">Выберите город</label>
            <select class="polygraphy-order__delivery-select" id="">
                <option defaultValue=""/>
                <option value="ООО">jyggjggjgm</option>
                <option value="ИП">Щебекино</option>
                <option value="АО">Валуйки</option>
            </select>
        </div>
        <div class="polygraphy-order__delivery-setting">
            <label className="polygraphy-order__delivery-attribute">Выберите пункт выдачи</label>
            <select class="polygraphy-order__delivery-select" id="">
                <option defaultValue=""/>
                <option value="ООО">Белгород</option>
                <option value="ИП">Щебекино</option>
                <option value="АО">Валуйки</option>
            </select>
        </div>
    </div>
    )
}


export default NewOrder