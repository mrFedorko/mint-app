import React from 'react';
import { retranslate } from "../../services/retranslate";

import './sass/help.scss';

const Help = () => {

    const {rtlData} = retranslate()
    return ( 
        <>
            <div className="help">
                <div className="container">
                    <div className="help__heading">Помощь</div>
                    <div className="help__slogan">Чтобы получить ответ на интересующий Вас вопрос, изучите "Частые вопросы" или обратитесь к нам на прямую в чате. Мы отвечаем в течении 1 часа. Постарайтесь максимально подробно объяснить свою проблему для лучшего взаимопонимания.</div>

                    <div className="help__wrap">
                        
                        <div className="chat">
                              
                            <div className="chat__block-heading">
                                <div className="chat__block-title">Чат</div>
                            </div>
                            <div className="chat__messages">

                                <div className="chat__message chat__message-answer">
                                    <p className="chat__message-text">Добрый день, чем могу помочь?</p>
                                    <p className="chat__message-time chat__message-time-left">2022-11-13 01:15</p>
                                </div>

                                <div className="chat__message chat__message-question">
                                    <p className="chat__message-text">Помогите, я тут ничего не понимаю. Хочу буквы</p>
                                    <p className="chat__message-time chat__message-time-right">2022-11-13 01:15</p>
                                </div>

                                <div className="chat__message chat__message-answer">
                                    <p className="chat__message-text">Добрый день, чем могу помочь?</p>
                                    <p className="chat__message-time chat__message-time-left">2022-11-13 01:15</p>
                                </div>

                                <div className="chat__message chat__message-question">
                                    <p className="chat__message-text">Помогите, я тут ничего не понимаю. Хочу буквы</p>
                                    <p className="chat__message-time chat__message-time-right">2022-11-13 01:15</p>
                                </div>
                                <div className="chat__message chat__message-answer">
                                    <p className="chat__message-text">Добрый день, чем могу помочь?</p>
                                    <p className="chat__message-time chat__message-time-left">2022-11-13 01:15</p>
                                </div>

                                <div className="chat__message chat__message-question">
                                    <p className="chat__message-text">Помогите, я тут ничего не понимаю. Хочу буквы</p>
                                    <p className="chat__message-time chat__message-time-right">2022-11-13 01:15</p>
                                </div>

                            </div>

                            <div className="chat__bottom">
                                <div className="chat__input-group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                                        <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                    </svg>
                                    <input type="text" className="chat__input-text"  placeholder="Напишите нам..."/>
                                    <button href="/"className="chat__send">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                            </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="faq">
                            <div className="faq__block-heading">
                                <div className="faq__block-title">Частые вопросы</div>
                            </div>
                            <div className="faq__content">
                                <details className="faq__chapter">
                                    <summary className="faq__chapter-question">Легенда</summary>
                                    <p className="faq__chapter-answer">Раскрывающийся текст Раскрывающийся текст Раскрывающийся текст</p>
                                </details>
                                <details className="faq__chapter">
                                    <summary className="faq__chapter-question">Легенда</summary>
                                    <p className="faq__chapter-answer">Раскрывающийся текст</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help ;