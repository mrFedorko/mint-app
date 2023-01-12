import { useSelector, useDispatch } from "react-redux";
import { orDeliveryTypeCh, orNameCh } from "../../../store/orderSlice";
import { PickPointDelivery, AdressDelivery } from "./delivery";

import { LayoutUpload } from "./layoutUpload";

export const BannerOrder= (props) => {
    const {orDelivery, orPrice} = useSelector(state => state.order);
    const {bannerPostWork, height, width} = useSelector(state => state.sign.calculator)
    const {orName} = useSelector(state => state.order)
    const dispatch = useDispatch();

    const descr = {
        'true': 'Баннер 440 г/м.кв, проклейка и люверсы через 30 см',
        'false': 'Баннер 440 г/м.кв, без проклейки и люверсов',
        
    }

    

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
                    <div className="polygraphy-order__parametr-item">{descr[!!(+bannerPostWork)]}</div>
                    <div className="polygraphy-order__parametr-item">{`Ширина ${width} см`}</div>
                    <div className="polygraphy-order__parametr-item">{`Длина ${height} см`}</div>
                    <div className="polygraphy-order__parametr-item">{orPrice} руб</div>
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
                    
                <LayoutUpload index={0} handleOnLayoutAdd = {handleOnLayoutAdd} layout = {props.layout} handleBorder = {handleBorder}/>
                    
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