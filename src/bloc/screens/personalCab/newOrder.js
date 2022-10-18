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
    <PolygraphyCalc
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
                
            </div>
            
        </div>
    )
}



export default NewOrder