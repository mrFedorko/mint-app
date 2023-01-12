import { SVGrateBad, SVGrateLow, SVGrateNormal, SVGrateGood } from "../../../svg/svg"
import { retranslate } from "../../../services/retranslate"
export const ReviewItem = (props) => {
    const { rtlDate } = retranslate();
    const { rate, text, date, anonim, name } = props

    const descr = {
        0: {
            svg: <></>,
            text: "Без оценки"
        },
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

    return(
        <div className="reviews__wrap">
            <img className="reviews__quote-left" src="icons/quote.svg" alt="quote" />
            <img className="reviews__quote-right" src="icons/quote.svg" alt="quote" />
            
            <div className="reviews__rate">
                {rate && descr[rate].svg}
                <div className="reviews__comment">{rate && descr[rate].text}</div>
            </div>
            <div className="reviews__content">{text}</div>
            {anonim && <div className="reviews__author reviews__author-anonim">
            Анонимно</div>}
            {!anonim && <div className="reviews__author">
            {name}</div>}
            <div className="reviews__date">{rtlDate(date, false)}</div>

        </div>
    )
}