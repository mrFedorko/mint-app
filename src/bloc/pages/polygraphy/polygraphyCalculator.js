import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productTypeCh, densityCh, quanCh, sizeCh, descrCh, polygPriceCh, descrSizeCh, polygSideCh, descrQuanCh, descrDensityCh } from '../../../store/polygraphySlice.js';

import data from '../../../services/polygraphy.json';
import price from '../../../services/polygraphyPrise.json';



const PolygraphyCalc = (props) => {
    const {productType, quan, size, density, side} = useSelector((state) => state.polygraphy);
    const dispatch = useDispatch();


   
    const handleProuctType = (item) => {
        dispatch(productTypeCh(item[1].value));
        dispatch(descrCh(item[1].descr));
    };

    const handleQuan = (item) => {
        dispatch(quanCh(item.quan));
        dispatch(descrQuanCh(item.descr));
    };

    const handleDensity = (item) => {
        dispatch(densityCh(item.density));
        dispatch(descrDensityCh(item.descr));
    };

    const handleSize = (item) => {
        dispatch(sizeCh(item.size));
        dispatch(descrSizeCh(item.descr));
    };

    const handleActiveClass = (comparable, match) => {
        if(comparable !== match){
            return 'polygraphy__select'
        } else {
            return 'polygraphy__select polygraphy__select_active'
        }
    }



    const productContent = Object.entries(data).map((item, index) => {
        return(
            <div key = {index} className={handleActiveClass(item[1].value, productType)} onClick={() => handleProuctType(item)}>
                <div className="polygraphy__select-img"><img src={item[1].image} style= {{width: item[1].imageWidth}} alt={item[1].value}/></div>
                <div className="polygraphy__select-text">{item[1].descr}</div>
            </div>
        );
    });
    

    let sizeContent = <></>,
        quanContent = <></>,
        densityContent = <></>,
        totalPrice = '0';

    if (productType){ 
        sizeContent = data[productType].size.map((item, index) => {
            return(
                <div key={index} className={handleActiveClass(item.size, size)}  onClick = {() => handleSize(item)}>
                    {
                    item.image && productType !== "leaflet"? 
                    <div className="polygraphy__select-img"><img src={item.image} style= {{width: "25px"}} alt="card"/></div>:
                    productType === 'leaflet' && item.image ?
                    <div className="polygraphy__select-img"><img src={item.image} style= {{width: "18px"}} alt="card"/></div>:
                    ''
                    }
                    <div className="polygraphy__select-text">{item.descr}</div>
                </div>
            );
        });

        quanContent = data[productType].quan.map((item, index) => {
            return(
                <div key={index} active className={handleActiveClass(item.quan, quan)} onClick={() => handleQuan(item)}>{item.descr} </div>
            )
        });

        densityContent = data[productType].density.map((item, index) =>{
            return(
                <div key={index} className={handleActiveClass(item.density, density)} onClick={() => handleDensity(item)}>{item.descr}</div>
            )
        } )
    }

    if(productType && size && density && quan){
        try {
            totalPrice = price[productType][size][density][quan];
            dispatch(polygPriceCh(totalPrice));
        } catch (error) {
            totalPrice = 'цена не определена';
        }
    }

    return(
        <>
            <div className="polygraphy__wrapper">
                <div className="polygraphy__inner">
                    <div className="polygraphy__heading">Тип продукции</div>
                    <div className="polygraphy__col">
                        
                        {productContent}
                    </div>
                </div>
                <div className="polygraphy__inner">
                    <div className="polygraphy__heading">Размер (ш×в)</div>
                    <div className="polygraphy__col">
                        {sizeContent}
                    </div>
                </div>
                <div className="polygraphy__inner">
                    <div className="polygraphy__heading">Плотность материала</div>
                    <div className="polygraphy__col">
                        {densityContent}
                    </div>
                </div>
                <div className="polygraphy__inner">
                    <div className="polygraphy__heading">Тираж</div>
                    <div className="polygraphy__col">
                        {quanContent}
                    </div>
                </div>
            </div>
            <div className="polygraphy__row">
                <div className="polygraphy__sides">
                    <label className='polygraphy__sides-wrap' >
                        <input 
                            className="polygraphy__cell" 
                            type="checkbox" 
                            value={'single'}
                            checked = {side === 'single'}  
                            onChange = {(e) => dispatch(polygSideCh(e.target.value))}
                        />Односторонняя печать
                    </label>
                    <label className='polygraphy__sides-wrap' >
                        <input 
                            className="polygraphy__cell" 
                            type="checkbox" 
                            value={'double'}
                            checked = {side === 'double'}  
                            onChange = {(e) => dispatch(polygSideCh(e.target.value))}
                        />Двусторонняя печать
                    </label>

                </div>
                <div className="polygraphy__result">
                    <div className="polygraphy__result-wrap">
                        <span className="polygraphy__date">Дата готовности: 01.01.2023</span>
                        <span className="polygraphy__price">{totalPrice + ' руб'}</span>
                    </div>
                    <button onClick={()=> props.handleResume(true)} className="polygraphy__go-btn">Продолжить оформление</button>
                </div>
            </div>
        </>
    );
};

export default PolygraphyCalc;