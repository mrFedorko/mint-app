import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../hooks/request.hook';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

import PolygraphyCalc from '../polygraphy/polygraphyCalculator';
import { useState } from 'react';





const NewOrder = () => {
    const [active, setActive] = useState('');

    const request = useRequest();
    const {orName, orType, orDetails, orQuan, orComent, orExpDate, orLayout, orDelivery} = useSelector(state => state.order);
    const auth = useContext(AuthContext)

    const handlerCreateOrder = async () => {
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

        await request('http://localhost:8000/api/order/create/', "POST", {...body, status: 'created'}, {"Content-Type" : 'application/json', Authorization: `Bearer ${auth.token}`});
        
    };

    let content = {
        'polyg': <PolygraphyCalc/>,
        'uv': <PolygraphyCalc/>,
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
                
                {active && content[active]}
                
            </div>
            
        </div>
    )
}



export default NewOrder