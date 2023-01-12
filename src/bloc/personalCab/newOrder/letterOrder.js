import { useSelector, useDispatch } from "react-redux";
import { orDeliveryTypeCh, orNameCh } from "../../../store/orderSlice";
import { PickPointDelivery, AdressDelivery } from "./delivery";

import { LayoutUpload } from "./layoutUpload";

export const LetterOrder= (props) => {
    const {orDelivery, orPrice} = useSelector(state => state.order);
    const {type, light, word, size, colored} = useSelector(state => state.sign.calculator)
    const {orName} = useSelector(state => state.order)
    const dispatch = useDispatch();

    const descr = {
        'plate' : 'плоские буквы из ПВХ 8мм',
        'volume': 'объемные буквы',
        light:{
            'true': 'c подсветкой',
            'false': 'без подсветки',
        },
        
        'full': 'сплошная',
        'stroke': 'с контуром',
    }

    

    const handleDelivery = (state) => {
        dispatch(orDeliveryTypeCh(state))
    }

    const handleBorder = (arg) => (arg ? {border:''} : {border: '3px solid red'})
    
    
    return(
        <div className="polygraphy-order">
            <div className="polygraphy-order__close" onClick={() => props.handlerResume(false)}>&times;</div>
            <div className="polygraphy-order__window">
                <h2 className="polygraphy-order__heading">Оформление  заказа</h2>
                <h3 className="polygraphy-order__title">Параметры</h3>

                <div className="polygraphy-order__content">
                    <div className="polygraphy-order__parametr-item">Вывеска "{word}": {descr[type]}</div>
                    <div className="polygraphy-order__parametr-item">{descr.light[`${!!(+light)}`]}</div>
                    <div className="polygraphy-order__parametr-item">Лицевая сторона {descr[colored]}</div>
                    <div className="polygraphy-order__parametr-item">Высота буквы {size} см</div>
                    <div className="polygraphy-order__parametr-item"> приблиизительно {orPrice} руб</div>
                </div>
                <h3 className="polygraphy-order__title">Вывеска - не шаблонный заказ, а уникальны продукт. Для уточчнения всех деталей мы свяжемся с вами по контактному телефону, указанному в вашем профиле. Если вы не хотите указывать ваш номер телефона - позвоните нам сами. До согласования с вами этот заказ не будет запущен в работу</h3>
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

                <div className="polygraphy-order__wrapper">
                    
                    
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