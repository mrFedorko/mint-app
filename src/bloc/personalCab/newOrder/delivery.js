import { useDispatch } from "react-redux";
import { orDeliveryAdressCh, orDeliveryCommentCh, orDeliveryTownCh, orReceiverNameCh, orReceiverPhoneCh } from "../../../store/orderSlice";

export const PickPointDelivery = () => {
    
    const dispatch = useDispatch();

    return(
        <div className="polygraphy-order__delivery-details">
            <div class="polygraphy-order__delivery-setting">
                <label className="polygraphy-order__delivery-attribute">Выберите город</label>
                <select class="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orDeliveryTownCh(e.target.value)))}>
                    <option defaultValue=""/>
                    <option value="ООО">Белгород</option>
                    <option value="ИП">Щебекино</option>
                    <option value="АО">Валуйки</option>
                </select>
            </div>
            <div class="polygraphy-order__delivery-setting">
                <label className="polygraphy-order__delivery-attribute">Выберите пункт выдачи</label>
                <select class="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orDeliveryAdressCh(e.target.value)))}>
                    <option defaultValue=""/>
                    <option value="ООО">Белгород</option>
                    <option value="ИП">Щебекино</option>
                    <option value="АО">Валуйки</option>
                </select>
            </div>
        </div>
    );
};

export const AdressDelivery = () => {

        const dispatch = useDispatch();

    return(
        <div className="polygraphy-order__delivery-details">
            <div class="polygraphy-order__delivery-setting">
                <label className="polygraphy-order__delivery-attribute">Выберите город</label>
                <select class="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orDeliveryTownCh(e.target.value)))}>
                    <option defaultValue=""/>
                    <option value="ООО">jyggjggjgm</option>
                    <option value="ИП">Щебекино</option>
                    <option value="АО">Валуйки</option>
                </select>
            </div>
            <div class="polygraphy-order__delivery-setting">
                <label className="polygraphy-order__delivery-attribute">Адрес получачтеля</label>
                <input class="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orDeliveryAdressCh(e.target.value)))} />
            </div>
            <div class="polygraphy-order__delivery-setting">
                <label className="polygraphy-order__delivery-attribute">Фамилия и имя получателя (как в паспорте)</label>
                <input class="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orReceiverNameCh(e.target.value)))}/>
                <label className="polygraphy-order__delivery-attribute">Мобильный телефон</label>
                <input className="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orReceiverPhoneCh(e.target.value)))}/>
                <label className="polygraphy-order__delivery-attribute">Комментарий для курьера</label>
                <input className="polygraphy-order__delivery-select" id="" onChange={((e) => dispatch(orDeliveryCommentCh(e.target.value)))}/>
            </div>
        </div>
    );
};