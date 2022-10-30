import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productTypeCh, densityCh, quanCh, sizeCh } from '../../../store/polygraphySlice.js';

import data from '../../../services/polygraphy.json';
import price from '../../../services/polygraphyPrise.json';



const PolygraphyCalc = () => {
    const {productType, quan, size, density} = useSelector((state) => state.polygraphy);
    const dispatch = useDispatch();
    
    const productContent = Object.entries(data).map((item, index) => {
        return(
            <div key = {index} className={item[1].value !== productType ? 'poligraphy__select' : 'poligraphy__select poligraphy__select_active'} onClick={() => dispatch(productTypeCh(item[1].value))}>
                <div className="poligraphy__select-img"><img src={item[1].image} style= {{width: item[1].imageWidth}} alt={item[1].value}/></div>
                <div className="poligraphy__select-text">{item[1].descr}</div>
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
                <div key={index} className={item.size !== size ? 'poligraphy__select' : 'poligraphy__select poligraphy__select_active'}  onClick = {() => dispatch(sizeCh(item.size))}>
                    {
                        productType === 'card' ? 
                            <div className="poligraphy__select-img"><img src={item.image} style= {{width: '25px'}} alt="card"/></div>:
                            ''
                    }
                    <div className="poligraphy__select-text">{item.descr}</div>
                </div>
            );
        });

        quanContent = data[productType].quan.map((item, index) => {
            return(
                <div key={index} active className={item.quan !== quan ? 'poligraphy__select' : 'poligraphy__select poligraphy__select_active'} onClick={() => dispatch(quanCh(item.quan))}>{item.descr} </div>
            );
        });

        densityContent = data[productType].density.map((item, index) =>{
            return(
                <div key={index} className={item.density !== density ? 'poligraphy__select' : 'poligraphy__select poligraphy__select_active'} onClick={() => dispatch(densityCh(item.density))}>{item.descr}</div>
            );
        } );
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
            <div className="poligraphy__wrapper">
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Тип продукции</div>
                    <div className="poligraphy__col">
                        
                        {productContent}
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Размер</div>
                    <div className="poligraphy__col">
                        {sizeContent}
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Плотность материала</div>
                    <div className="poligraphy__col">
                        {densityContent}
                    </div>
                </div>
                <div className="poligraphy__inner">
                    <div className="poligraphy__heading">Тираж</div>
                    <div className="poligraphy__col">
                        {quanContent}
                    </div>
                </div>
            </div>
            <div className="poligraphy__result">
                <span className="poligraphy__price">{totalPrice + ' руб'}</span>
                <button className="poligraphy__go-btn">Продолжить оформление</button>
            </div>
        </>
    );
};

export default PolygraphyCalc;