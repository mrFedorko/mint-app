import { useSelector, useDispatch } from "react-redux";
import { orDeliveryTypeCh, orNameCh } from "../../../store/orderSlice";
import { PickPointDelivery, AdressDelivery } from "./delivery";


export const UvOrder= (props) => {
    const {orDelivery, orPrice} = useSelector(state => state.order);
    const {signMaterial, height, width} = useSelector(state => state.sign.calculator)
    const {orName} = useSelector(state => state.order)
    const dispatch = useDispatch();

    const descr = {
        'PVC3': 'Табличка из пластика ПВХ 3мм',
        'PVC5': 'Табличчка из пластика ПВХ 5мм',
        'ACP3': 'Табличка из алюминиевой композитной паннели 3 мм'
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
                    <div className="polygraphy-order__parametr-item">{descr[signMaterial]}</div>
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
                    
                        <label className="polygraphy-order__content polygraphy-order__maquette"
                        style={handleBorder(props.layout[0])}>
                        <input type="file" onChange={(e) => handleOnLayoutAdd(e, 0)}/>
                            <div className="polygraphy-order__text">1 сторона</div>
                            <img src="../icons/poligraphy_icons/add.svg" style= {{width: '25px'}} alt="add" className="polygraphy-order__add" />
                            <p>нажмите, чтобы добавить файл</p>
                        </label>
                    
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