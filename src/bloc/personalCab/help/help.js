import React from 'react';
import { Chat } from './chat';
import { Faq } from './faq';

import '../sass/help.scss';

const Help = () => {

    return ( 
        <>
            <div className="help">
                <div className="container">
                    <div className="help__heading">Помощь</div>
                    <div className="help__slogan">Чтобы получить ответ на интересующий Вас вопрос, изучите "Частые вопросы" или обратитесь к нам на прямую в чате. Мы отвечаем в течении 1 часа. Постарайтесь максимально подробно объяснить свою проблему для лучшего взаимопонимания.</div>

                    <div className="help__wrap">
                        
                        <Chat/>
                        <Faq/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Help ;