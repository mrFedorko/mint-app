import React, { useState } from 'react';

import PolygraphyCalc from './polygraphyCalculator';

import '../../../sass/sassTemplates/hat.scss';
import '../../../sass/base/_base.scss';
import './polygraphy.scss';


const Polygraphy = () =>  {
    
    const [active, setActive] = useState('useful');

    return(
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => setActive('useful')} className={'hat__button'+ (active === 'useful' ? ' signs__button_active' : '')}>Полезная информация</button>
                            <button onClick={() => setActive('calc')} className={'hat__button'+ (active === 'calc' ? ' signs__button_active' : '')}>Онлайн калькулятор</button>
                            <button onClick={() => setActive('order')}  className={'hat__button'+ (active === 'order' ? ' signs__button_active' : '')}>Как заказать</button>
                        </div>
                        <h1 className="hat__title">Полиграфия</h1>
                    </div>
                    <img className="polygraphy__img" src="img/flayers.png" alt="flayers"/>
                </div>
            </section>
            <section className="signs">
                <div className="container">
                    <PolygraphyCalc/>
                </div>
            </section> 
        </>
    );
    
};

export default Polygraphy;