import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orDeliveryTypeCh, orNameCh, orLayoutCh } from "../../../store/orderSlice";
import { AdressDelivery, PickPointDelivery } from "./delivery";


export const PolygraphyOrder= (props) => {
    const {orDelivery} = useSelector(state => state.order);
    const {descr, descrDensity, descrQuan, descrSize, polygPrice, side} = useSelector(state => state.polygraphy)
    const {orName} = useSelector(state => state.order)
    const dispatch = useDispatch();


    useEffect(() => {
        props.setLayout([])
    }, [side])

    let descrSide;
    side === 'single' ? descrSide = 'односторонняя' : descrSide = 'двусторонняя' 
    

    const handleDelivery = (state) => {
        dispatch(orDeliveryTypeCh(state))
    }

    const handleOnLayoutAdd = (e, index) => {
        const newLayouts = [...props.layout];
        newLayouts[index] = e.target.files;
        props.setLayout(newLayouts);
    }

    const handleBorder = (arg) => (arg ? {border:''} : {border: '3px solid red'})
    
    
    return(
        <div className="polygraphy-order">
            <div className="polygraphy-order__close" onClick={() => props.handlerResume(false)}>&times;</div>
            <div className="polygraphy-order__window">
                <h2 className="polygraphy-order__heading">Оформление  заказа</h2>
                <h3 className="polygraphy-order__title">Параметры</h3>

                <div className="polygraphy-order__content">
                    <div className="polygraphy-order__parametr-item">{descr}</div>
                    <div className="polygraphy-order__parametr-item">{descrSize}</div>
                    <div className="polygraphy-order__parametr-item">{descrSide}</div>
                    <div className="polygraphy-order__parametr-item">{descrDensity}</div>
                    <div className="polygraphy-order__parametr-item">{descrQuan}</div>
                    <div className="polygraphy-order__parametr-item">{polygPrice} руб</div>
                </div>

                <h3 className="polygraphy-order__title">Название</h3>
                <div className="polygraphy-order__content polygraphy-order__col"
                     style={handleBorder(orName)}>
                    <label>Необходимо для удобства ориентирования по заказам</label>
                    <input 
                        type="text" 
                        className="polygraphy-order__name" 
                        placeholder="Введите название для данного заказа"
                        defaultValue={orName}
                        onChange={(e) => dispatch(orNameCh(e.target.value))} 
                    />
                </div>

                <h3 className="polygraphy-order__title">Макет</h3>
                <div className="polygraphy-order__wrapper">
                    
                        <label className="polygraphy-order__content polygraphy-order__maquette"
                        style={handleBorder(props.layout[0])}>
                        <input type="file" onChange={(e) => handleOnLayoutAdd(e, 0)}/>
                            <div className="polygraphy-order__text">1 сторона</div>
                            <img src="../icons/poligraphy_icons/add.svg" style= {{width: '25px'}} alt="add" className="polygraphy-order__add" />
                            <p>нажмите, чтобы добавить файл</p>
                        </label>
                    
                    { side === 'double' && <label className="polygraphy-order__content polygraphy-order__maquette"
                    style={handleBorder(props.layout[1])}>
                        <input type="file" onChange={(e) => handleOnLayoutAdd(e, 1)}/>
                        <div className="polygraphy-order__text">2 сторона</div>
                        <img src="../icons/poligraphy_icons/add.svg" style= {{width: '25px'}} alt="add" className="polygraphy-order__add" />
                        <p>нажмите, чтобы добавить файл </p>
                    </label>}
                </div>

                <h3 className="polygraphy-order__title">Доставка DPD</h3>
                <div className="polygraphy-order__wrapper">
                    <div className={orDelivery.type === 'point' ? "polygraphy-order__content polygraphy-order__delivery polygraphy-order__delivery_active" : "polygraphy-order__content polygraphy-order__delivery"} onClick={()=>handleDelivery('point')}>
                        <div className="polygraphy-order__text">Доставка до пункта выдачи</div>
                        <img src="../icons/poligraphy_icons/box.svg" style= {{width: '25px'}} alt="add"/>
                    </div>
                    <div className={orDelivery.type === 'adress' ? "polygraphy-order__content polygraphy-order__delivery polygraphy-order__delivery_active" : "polygraphy-order__content polygraphy-order__delivery"} onClick={()=>handleDelivery('adress')}>
                        <div className="polygraphy-order__text">Адресная доставка (курьер)</div>
                        <img src="../icons/poligraphy_icons/delivery-man.svg" style= {{width: "25px"}} alt="add"/>
                    </div>
                </div>

                {orDelivery.type === 'point' ? <PickPointDelivery/> : 
                    orDelivery.type === 'adress' ? <AdressDelivery/> :
                        ''}
               

            </div>
        </div>
    );
};