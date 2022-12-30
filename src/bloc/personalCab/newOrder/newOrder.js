import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PolygraphyCalc from '../../pages/polygraphy/polygraphyCalculator';
import { PolygraphyOrder } from './polygraphyOrder';

import SignsCalculator from '../../pages/signs/signsCalculator';
import { resetSign, signTypeCh } from '../../../store/signSlice';
import { orTypeCh,  orReset } from '../../../store/orderSlice';
import { useCreateOrder } from './createOrder';
import { useCreateOrderMutation } from '../../../store/api/orderApi';
import { sMessageCh } from '../../../store/sMessageSlice';
import { resetPolyg } from '../../../store/polygraphySlice';
import { useNavigate } from "react-router-dom";
import { useUploadMutation } from '../../../store/api/uploadApi';
import { UvOrder } from './uvOrder';
import { useOutletContext } from 'react-router-dom';




const NewOrder = () => {
    const [resume, setResume] = useState(false);
    const [layout, setLayout] = useState([]);
    const [_, setActive] = useOutletContext();
    setActive('new');


    // const polygDetails = useSelector(state => state.polygraphy)
    const { orType } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderData = useCreateOrder();
    const [createOrder] = useCreateOrderMutation();
    const [upload, {isLoading}] = useUploadMutation();

    console.log(layout)



    

    const handleResume = (v) => {
        setResume(v)
    }
    let active = orType;

    const handleSetActive = (state) => {
        dispatch(orTypeCh(state));
        if(state !== 'polyg')dispatch(signTypeCh(state));
    }
            
    const handleActiveClass = (state) => {
        if(active !== state) {
            return 'new-order__block'
        }  else {
            return 'new-order__block new-order__block_active'
        } 
    };

    const handleCreateOrder = async () => {
        if (!orderData){
            return dispatch(sMessageCh('Введите все данные'));  
        }

        console.log(orderData)
        await createOrder(orderData);


        //for upload files
        const formData = new FormData();
        const {owner: id, date: orderDate} = orderData
        layout.forEach(item=> {
            formData.append('files', item[0])
        })
        console.log(layout)
        await upload({id, orderDate, formData})
        
        
        dispatch(orReset());
        dispatch(resetPolyg());
        dispatch(resetSign());
        setResume(false);

        return navigate('/personal')

    } 

   

    console.log(orderData)
    const signCalculator = <SignsCalculator blocked={!!orType} handleResume = {handleResume}/>
    const polygraphyCalc = <PolygraphyCalc handleResume = {handleResume}/>
    
    let content = {
        'uv': {calc: signCalculator, 'order': <UvOrder handleResume = {handleResume} layout={layout} setLayout={setLayout}/>},
        'banner': {calc: signCalculator, 'order': <PolygraphyOrder handleResume = {handleResume} layout={layout} setLayout={setLayout}/>},
        'letter': {calc: signCalculator, 'order': <PolygraphyOrder handleResume = {handleResume} layout={layout} setLayout={setLayout}/>},
        'polyg': {calc: polygraphyCalc, 'order': <PolygraphyOrder layout={layout} setLayout={setLayout} handlerResume = {handleResume}/>},
        '':{calc: <></>, 'order': <></>}

    };
    return(
        <div className="new-order">
            <div className="container">
                <div className="new-order__heading">Новый заказ:</div>
                <div className="new-order__wrapper">
                    <div className={handleActiveClass('polyg')} onClick={() =>  handleSetActive('polyg')}>Полиграфия</div>
                    <div className={handleActiveClass('uv')} onClick={() =>  handleSetActive('uv')}>УФ печать</div>
                    <div className={handleActiveClass('banner')} onClick={() =>  handleSetActive('banner')}>Баннер</div>
                    <div className={handleActiveClass('letter')} onClick={() =>  handleSetActive('letter')}>Вывеска</div>    
                </div>
                
                {!!active && content[active].calc}
                {resume && content[active].order}

                {orderData && <button 
                    className="new-order__confirm"
                    children="Оформить заказ"
                    onClick={handleCreateOrder}
                />}

                {!orderData && <h6> Заполните все поля заказа </h6>}
            </div>
            
        </div>
    );
};






export default NewOrder;