import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useGetMyReviewsQuery, useSendReviewMutation } from '../../../store/api/reviewApi';
import { SVGrateBad, SVGrateGood, SVGrateLow, SVGrateNormal } from '../../../svg/svg';
import { anonimCh, dateCh, imgCh, orderCh, rateCh, resetReview, textCh } from '../../../store/rewiewSlice'


import '../../personalCab/sass/feedback.scss';
import { FeedbackItem } from './feedbackItem';
import { FeedbackChange } from './feedbackChange';
const Feedback = () => {
    
    const [active, setActive] = useOutletContext();
    const navigate = useNavigate();
    setActive('feedback');

    const [change, setChange] = useState(false)
    const [target, setTarget] = useState(null)
    
    console.log(target)

    const { anonim, text, rate, date, order, img} = useSelector(state=> state.review);

    const dispatch = useDispatch()
    const {userId} = useSelector(state=> state.auth)
    const {data, isLoading} = useGetMyReviewsQuery(userId)
    const [sendReview] = useSendReviewMutation();

    // useEffect(() => {
    //     dispatch(dateCh(Date.now().toString()));
    //     console.log(date)
    // }, [])
    const descr = {
        0: '',
        4: 'Хорошо',
        3: 'Нормально',
        2: 'Так себе',
        1: 'Плохо',
    }

    let myReviews = <></> 
    
    if(isLoading){
        myReviews =<h5>Загрузка ваших отзывов...</h5>
    }

    if(!isLoading && !data){
        myReviews = <h5>Похоже, вы не отправили ни одного отзыва</h5>
    }

    if(!isLoading && data){
        myReviews = data.map(item => {
            const { text, rate, date, _id, order, anonim, img, access } = item;
            return <FeedbackItem
            acc
                target = {_id}
                key = {_id}
                access = {access}
                text={text}
                rate = {rate}
                date = {date}
                anonim = {anonim}
                order = {order}
                img = {img}
                setChange = {setChange}
                setTarget = {setTarget}
            />
        })
    }


    const handleRate = async (rate) => {
        dispatch(rateCh(rate));
        dispatch(dateCh(Date.now().toString()))
    }

    const handleFill = (r) => {
        if(rate === r) {
            return  '#4d897c' 
        } else {
            return ''
        }
    }

    const handleCloseChange = () => {
        dispatch(resetReview());
        setChange(false)
        setTarget(null)
    }

    

    const handleSendReview = async () => {
        
        const body = {anonim, text, rate, date, order, img};
 
        await sendReview({id: userId, body});
        dispatch(resetReview());
    }

    const falseValues = !text || !rate
    


    return ( 
        <>
            <div className="feedback">
                <div className="container">
                    <div className="feedback__heading">Оставить отзыв</div>
                    <div className="feedback__slogan">Мы предаём огромное значение взаимоотношениям с клиентами и партнерами. Ваши отзывы жизненно важны,  чтобы делать все правильно и с каждым днем становится лучше.</div>

                    <div className="feedback__wrap">
                        <div className="feedback__prompt">
                        Здесь вы можете оставить свой отзыв о нас или нашем товаре. Все отзывы доступны для публичного просмотра. Вы можете указать свои настоящие данные из личного кабинета либо оставить отзыв анонимно.Также вы можете отредактировать или удалить ранее оставленный отзыв.
                        </div>

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
                        <button disabled={falseValues} className="feedback__btn" onClick={() =>  { handleSendReview()}}> Оставить отзыв</button>
                         {falseValues && <div className="feedback__warn">Поставьте оценку и напишите отзыв</div>}
                    </div>

                    <div className="feedback__wrap">
                        <div className="feedback__heading">Ваши отзывы</div>
                        {myReviews}
                    </div>

                    <button onClick={() => navigate('/reviews')} className="feedback__btn feedback__btn-big">
                        <p>
                            <img src="../img/quote.png" alt="quote"/> Посмотреть отзывы других клиентов 
                        </p>
                    </button>
                    
                </div>
                {change && <FeedbackChange 
                        handleFill = {handleFill}
                        handleRate = {handleRate}
                        descr = {descr}
                        target = {target}
                        handleCloseChange = {handleCloseChange}    
                    />}
            </div>

        </>
    );
};

export default Feedback ;