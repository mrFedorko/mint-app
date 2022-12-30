import { retranslate } from "../../../services/retranslate"
import { SVGpolygIcon } from "../../../svg/svg"


export const PolygOrderItem = (props) => {
    
    const {date, details, name, status, price, payStatus, expDate, key} = props.order
    const index = props.index
    const { rtlData, rtlStatus, rtlPayStatus, rtlSide } = retranslate()

    return (
        <div className="manu__strip" key={key}>
            <div className="manu__number">{index}</div>
            <div className="manu__wrapper">
                <div className="manu__date">Заказ от {rtlData(date, true)}</div>
                <div className="manu__info">
                    <div className="manu__icon"><SVGpolygIcon fill="#4d897c" height="35"/></div>
                    <div className="manu__definition">
                        <div className="manu__inner">
                            <div className="manu__order-name">{details.descr} {rtlSide(details.side)}</div>
                            <div className="manu__order-detales">{details.descrQuan}</div>
                        </div>
                        <div className="manu__comment">{name}</div>
                    </div>
                    <div className="manu__control">
                        <div className="manu__control-group">
                            <div className="manu__control-parametr">Статус заказа:</div>
                            <div className="manu__control-value">{rtlStatus(status)} <br /> {rtlPayStatus(payStatus)}</div>
                        </div>
                        <div className="manu__control-group">
                            <div className="manu__control-parametr">Дата готовности:</div>
                            <div className="manu__control-value">{rtlData(expDate)}</div>
                        </div>
                    </div>
                    <div className="manu__buttons">
                        <button type="button" class="manu__button manu__button_edit" href="/">
                            <img src="../icons/edit.png" alt="edit"/>
                            Редактировать
                        </button>
                        <button type="button" class="manu__button manu__button_cansel" href="/">
                            <img src="../icons/cansel.png" alt="edit"/>
                        Отменить
                        </button>
                        <button type="button" class="manu__button manu__button_pay" href="/">
                            <div className="manu__sum">{price}</div>
                            <div className="manu__pay">Оплатить</div>
                        </button>
                    </div>
                    <div className="manu__documents">
                        <button type="button" class="manu__chek" href="/">Счёт</button>
                        <button type="button" class="manu__chek" href="/">Накладная</button>
                    </div>
                </div>
            </div>
        </div>
    )
}