
import { SVGrateBad, SVGrateLow, SVGrateNormal, SVGrateGood } from "../../../svg/svg"
import { retranslate } from "../../../services/retranslate"
import { useDispatch } from "react-redux";
import {  anonimCh, dateCh, imgCh, orderCh, rateCh, textCh } from "../../../store/rewiewSlice";


export const FeedbackItem = (props) => {
    const dispatch = useDispatch()

    const {rtlDate} = retranslate();
    const { text, rate, anonim, date, img, order, setChange, setTarget, target, access} = props;

    
    const descr = {
        1: {
            svg: <SVGrateBad/>,
            text: "Плохо",
        },
        2: {
            svg: <SVGrateLow/>,
            text: "Так себе",
        },
        3:{
            svg: <SVGrateNormal/>,
            text: "Нормально",
        },
        4: {
            svg: <SVGrateGood/>,
            text: "Хорошо",
        },
    }
    
    const handleOpenChange = () => {
        dispatch(textCh(text));
        dispatch(imgCh(img));
        dispatch(rateCh(rate));
        dispatch(dateCh(date));
        dispatch(orderCh(order));
        dispatch(anonimCh(anonim))
        setChange(true);
        setTarget(target);
    }

    return(
        <div className="feedback__review">
            {!access && <div className="feedback__warn" >Этот отзыв проверяется модераторами. Он будет опубликован сразу после проверки</div>}
            
            <img src="icons/quote.svg" alt="" />
            <div className="feedback__rate">
                {props.rate && descr[props.rate].svg}
                <div className="feedback__comment">{props.rate && descr[props.rate].text}</div>
            </div>
            <label className="feedback__input_definition">{rtlDate(props.date)}</label>
            <div className="feedback__content">{props.text}</div>
            <button className="feedback__btn" onClick={handleOpenChange}> Редактировать </button>
            <button className="feedback__btn"> Удалить </button>
        </div>
    )
}