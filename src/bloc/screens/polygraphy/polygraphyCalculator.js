import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productTypeCh, densityCh, quanCh, sizeCh } from '../../../store/polygraphySlice.js';

import data from '../../../services/polygraphy.json';
import price from '../../../services/polygraphyPrise.json';




const PolygraphyCalc = (props) => {
    const {productType, quan, size, density} = useSelector((state) => state.polygraphy);
    const dispatch = useDispatch();
    
    const productContent = Object.entries(data).map((item, index) => {
        return(
            <div key = {index} className={item[1].value !== productType ? "polygraphy__select" : "polygraphy__select polygraphy__select_active"} onClick={() => dispatch(productTypeCh(item[1].value))}>
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
                <div key={index} className={item.size !== size ? "polygraphy__select" : "polygraphy__select polygraphy__select_active"}  onClick = {() => dispatch(sizeCh(item.size))}>
                    {
                    productType === 'card' ? 
                    <div className="polygraphy__select-img"><img src={item.image} style= {{width: "25px"}} alt="card"/></div>:
                    ''
                    }
                    <div className="polygraphy__select-text">{item.descr}</div>
                </div>
            );
        });

        quanContent = data[productType].quan.map((item, index) => {
            return(
                <div key={index} active className={item.quan !== quan ? "polygraphy__select" : "polygraphy__select polygraphy__select_active"} onClick={() => dispatch(quanCh(item.quan))}>{item.descr} </div>
            )
        });

        densityContent = data[productType].density.map((item, index) =>{
            return(
                <div key={index} className={item.density !== density ? "polygraphy__select" : "polygraphy__select polygraphy__select_active"} onClick={() => dispatch(densityCh(item.density))}>{item.descr}</div>
            )
        } )
    }

    if(productType && size && density && quan){
        try {
            totalPrice = price[productType][size][density][quan];    
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
                    <div className="polygraphy__heading">Размер</div>
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
                    {/* <label className='polygraphy__sides-wrap' >
                        <input className="polygraphy__cell" type="checkbox"/>Односторонняя печать
                    </label>
                    <label className='polygraphy__sides-wrap' >
                        <input className="polygraphy__cell"type="checkbox"/>Двусторонняя печать
                    </label> */}

                    <div className="polygraphy__sides-wrap">
                        <div className="polygraphy__cell"></div>
                        <span className="polygraphy__sides-need">Односторонняя печать</span>
                    </div>
                    <div className="polygraphy__sides-wrap">
                        <div className="polygraphy__cell"></div>
                        <span className="polygraphy__sides-need">Двусторонняя печать</span>
                    </div>
                </div>
                <div className="polygraphy__result">
                    <span className="polygraphy__price">{totalPrice + ' руб'}</span>
                    <button onClick={()=> props.handlerResume(true)} className="polygraphy__go-btn">Продолжить оформление</button>
                </div>
            </div>
        </>
    );
};

export default PolygraphyCalc;