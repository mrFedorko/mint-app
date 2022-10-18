import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../hooks/request.hook';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

import { UploadFile } from './components/uploadFile';

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
                    <div className="new-order__group">
                        <div className="new-order__little-block">Табличка</div>
                        <div className="new-order__little-block">Баннер</div>
                        <div className="new-order__little-block">Вывеска</div>    
                    </div>
                    <div className="new-order__block">Сайт</div>
                </div>
                <button style={{margin : '0 auto'}} 
                        className ='btn btn-info mb-3'
                        onClick={createOrderHandler}
                        children = "оформить" >
                </button>
                <UploadFile/>
            </div>
            
        </div>
    )
}
export default NewOrder