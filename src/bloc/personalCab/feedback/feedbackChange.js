import { useDispatch, useSelector } from 'react-redux';
import { useChangeReviewMutation } from '../../../store/api/reviewApi';
import { SVGrateBad, SVGrateGood, SVGrateLow, SVGrateNormal } from '../../../svg/svg';
import { anonimCh,  textCh } from '../../../store/rewiewSlice'


export const FeedbackChange = (props) => {
    const { userId } = useSelector(state=> state.auth)
    const { anonim, rate, text, order, img, date } = useSelector(state=>state.review)

    const dispatch = useDispatch();
    const {handleFill, handleRate, descr, target, handleCloseChange} = props;

    const [changeReview] = useChangeReviewMutation()

    const falseValues = !text || !rate


    const handleChangeReview = async () => {
        const body = {text, rate, anonim, order, img, date };
        await changeReview({id: userId, target, body});
        handleCloseChange();

    }

    return (
                <div className="feedback__change" onClick={(e) =>{e.target.className === "feedback__change" && props.handleCloseChange()}}>
                    <div className="feedback__wrap" style={{boxShadow: 'none'}}>

                        <label className="feedback__input_definition">Вы оставляете отзыв как:</label>
                        <select value = {anonim}  class="feedback__form-control" id="" onChange={(e) => dispatch(anonimCh(e.target.value))}>
                            <option value={false}>Данные из ЛК</option>
                            <option value={true}>Анонимный клиент</option>
                        </select>
                        <label className="feedback__input_definition">Дайте свою оценку:</label>
                        <div className="feedback__wrap-grade">
                            <div className="feedback__grade">
                                <SVGrateGood fill={handleFill(4)} handleRate = {handleRate}/>
                                <SVGrateNormal fill={handleFill(3)} handleRate = {handleRate}/>
                                <SVGrateLow fill={handleFill(2)} handleRate = {handleRate}/>
                                <SVGrateBad fill={handleFill(1)} handleRate = {handleRate}/>
                            </div>
                            <div className="feedback__grade-text">{descr[rate]}</div>
                        </div>

                        <textarea 
                            type="text" 
                            className="feedback__window"  
                            placeholder="Напишите свое мнение..."
                            value={text}
                            onChange={(e) =>dispatch(textCh(e.target.value)) }
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                        </svg>
                        <button disabled={falseValues} className="feedback__btn" onClick={() =>  { handleChangeReview()}}>Изменить отзыв</button>
                         {falseValues && <div className="feedback__warn">Поставьте оценку и напишите отзыв</div>}
                    </div>
                </div>
                    
    )
}