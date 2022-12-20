import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import '../personalCab/sass/feedback.scss';
const Feedback = () => {
    const [active, setActive] = useOutletContext();
    const navigate = useNavigate();

    setActive('feedback');
    

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
                        <select class="feedback__form-control" id="">
                            <option value="ООО">Данные из ЛК</option>
                            <option value="ИП">Анонимный клиент</option>
                        </select>
                        <label className="feedback__input_definition">Дайте свою оценку:</label>
                        <div className="feedback__wrap-grade">
                            <div className="feedback__grade">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 40.47 40.47"><defs><style></style></defs><g id="a"/><g id="b"><g id="c"><path class="d" d="M20.23,0C9.06,0,0,9.06,0,20.24s9.06,20.23,20.23,20.23,20.24-9.06,20.24-20.23S31.41,0,20.23,0ZM8.87,14.36c0-1.63,1.32-2.96,2.96-2.96s2.96,1.33,2.96,2.96-1.33,2.96-2.96,2.96-2.96-1.32-2.96-2.96Zm19.3,15.11c-2.57,3.31-7.2,4.75-11.18,3.34-4.09-1.45-6.81-5.24-6.87-9.57-.03-2.42,3.72-2.42,3.75,0,.05,3.57,2.97,6.45,6.6,6.35,3.52-.09,6.33-3.2,6.1-6.77-.06-1.02,.91-1.88,1.88-1.88,1.06,0,1.81,.86,1.87,1.88,.16,2.39-.69,4.78-2.15,6.65Zm.47-12.15c-1.63,0-2.96-1.32-2.96-2.96s1.33-2.96,2.96-2.96,2.96,1.33,2.96,2.96-1.32,2.96-2.96,2.96Z"/></g></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 40.47 40.47"><defs><style></style></defs><g id="a"/><g id="b"><g id="c"><g><path class="d" d="M11.51,24.21l.02,.02h0s-.02-.02-.03-.03v.02Z"/><path class="d" d="M11.5,24.19c-.05-.05-.09-.07,0,.01h0Z"/><path class="d" d="M20.24,0C9.06,0,0,9.06,0,20.24s9.06,20.24,20.24,20.24,20.24-9.06,20.24-20.24S31.41,0,20.24,0Zm8.41,11.4c1.64,0,2.96,1.33,2.96,2.96s-1.33,2.96-2.96,2.96-2.96-1.33-2.96-2.96,1.33-2.96,2.96-2.96Zm-16.82,0c1.64,0,2.96,1.33,2.96,2.96s-1.33,2.96-2.96,2.96-2.96-1.33-2.96-2.96,1.33-2.96,2.96-2.96ZM28.87,28.39c-2.59,.93-5.51,1.16-8.24,1.19-2.87,.03-5.92-.18-8.67-1.07-1.87-.6-3.93-1.63-4.07-3.83-.14-2.26,3.15-2.39,3.68-.42l.02,.02h.02c.13,.1,.27,.18,.41,.25,.57,.3,1.28,.49,1.99,.66,2.04,.5,4.14,.64,6.23,.64s4.29-.15,6.37-.68c.7-.18,1.36-.36,1.93-.68,.11-.06,.21-.12,.32-.19,.09-.72,.53-1.35,1.33-1.57,.91-.25,2.13,.31,2.31,1.31,.42,2.4-1.65,3.66-3.62,4.37Z"/></g></g></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 40.47 40.47"><defs><style></style></defs><g id="a"/><g id="b"><g id="c"><path class="d" d="M20.24,0C9.06,0,0,9.06,0,20.24s9.06,20.24,20.24,20.24,20.24-9.06,20.24-20.24S31.41,0,20.24,0Zm8.41,11.4c1.64,0,2.96,1.33,2.96,2.96s-1.33,2.96-2.96,2.96-2.96-1.33-2.96-2.96,1.33-2.96,2.96-2.96Zm-16.82,0c1.64,0,2.96,1.33,2.96,2.96s-1.33,2.96-2.96,2.96-2.96-1.33-2.96-2.96,1.33-2.96,2.96-2.96Zm18.03,15.3H10.61c-1.02,0-1.85-.83-1.85-1.85s.83-1.85,1.85-1.85H29.86c1.02,0,1.85,.83,1.85,1.85s-.83,1.85-1.85,1.85Z"/></g></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 40.47 40.47"><defs><style></style></defs><g id="a"/><g id="b"><g id="c"><path class="d" d="M20.24,0C9.06,0,0,9.06,0,20.24s9.06,20.24,20.24,20.24,20.24-9.06,20.24-20.24S31.41,0,20.24,0ZM8.87,14.36c0-1.64,1.33-2.96,2.96-2.96s2.96,1.33,2.96,2.96-1.33,2.96-2.96,2.96-2.96-1.33-2.96-2.96ZM30.33,30.47c-.06,1.01-.81,1.88-1.88,1.88-.97,0-1.94-.86-1.88-1.88,.23-3.57-2.58-6.68-6.11-6.78-3.62-.1-6.54,2.78-6.59,6.36-.03,2.42-3.78,2.41-3.75,0,.03-2.48,.91-4.8,2.53-6.68,2.7-3.15,7.4-4.29,11.24-2.74,3.92,1.58,6.71,5.53,6.44,9.84Zm-1.68-13.15c-1.64,0-2.96-1.33-2.96-2.96s1.33-2.96,2.96-2.96,2.96,1.33,2.96,2.96-1.33,2.96-2.96,2.96Z"/></g></g></svg>
                            </div>
                            <div className="feedback__grade-text">Хорошо Нормально Так себе Плохо</div>
                        </div>

                        <textarea 
                            type="text" 
                            className="feedback__window"  
                            placeholder="Напишите свое мнение..."
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                        </svg>
                        <button className="feedback__btn"> Оставить отзыв</button>

                    </div>

                    <div className="feedback__wrap">
                        <div className="feedback__heading">Ваши отзывы</div>

                        
                        <div className="feedback__review">
                            <img src="icons/quote.svg" alt="" />
                            <label className="feedback__input_definition">28.9.2029</label>
                            <div className="feedback__content">Все очень хорошо, приятные ребята. Люблю, когда все быстро выполняют и понимают с полуслова. Плачу всегда предоплату 100% по расчетному счету и не жалею. Молодцы одним словом! Я рад жить на земле. Спасибо, можно к вам работать устроиться? какова зп?</div>
                            <button className="feedback__btn"> Редактировать </button>
                            <button className="feedback__btn"> Удалить </button>
                        </div>

                        <div className="feedback__review">
                            <img src="icons/quote.svg" alt="" />
                            <label className="feedback__input_definition">45.9.2025</label>
                            <div className="feedback__content">Все очень хорошо, приятные ребята. Люблю, когда все быстро выполняют и понимают с полуслова. Плачу всегда предоплату 100% по расчетному счету и не жалею. Молодцы одним словом! ура</div>
                            <button className="feedback__btn"> Редактировать </button>
                            <button className="feedback__btn"> Удалить </button>
                        </div>

                        <div className="feedback__review">
                            <img src="icons/quote.svg" alt="" />
                            <label className="feedback__input_definition">23.9.2022</label>
                            <div className="feedback__content">Все очень хорошо, приятные ребята. Люблю, когда все быстро выполняют и понимают с полуслова. Плачу всегда предоплату 100% по расчетному счету и не жалею. Молодцы одним словом! ура</div>
                            <button className="feedback__btn"> Редактировать </button>
                            <button className="feedback__btn"> Удалить </button>
                        </div>
                    </div>

                    <button onClick={() => navigate('/reviews')} className="feedback__btn feedback__btn-big">
                        <p>
                            <img src="../img/quote.png" alt="quote"/> Посмотреть отзывы других клиентов 
                        </p>
                    </button>
                </div>
            </div>

        </>
    );
};

export default Feedback ;