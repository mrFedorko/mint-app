import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


import '../../../sass/sassTemplates/hat.scss';
import '../../../sass/base/_base.scss';
import './polygraphy.scss';


const Polygraphy = () =>  {
    
    const [active, setActive] = useState('useful');
    const navigate = useNavigate();
    return(
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => {setActive('useful'); navigate('/polygraphy');}} className={'hat__button'+ (active === 'useful' ? ' hat__button_active' : '')}>Полезная информация</button>
                            <button onClick={() => {setActive('calc'); navigate('/polygraphy/order');}} className={'hat__button'+ (active === 'calc' ? ' hat__button_active' : '')}>Онлайн калькулятор</button>
                        </div>
                        <h1 className="hat__title">Полиграфия</h1>
                    </div>
                </div>
            </section>
            <section className="signs">
                <div className="container">
                    <Outlet/>
                </div>
            </section> 
        </>
    );
    
};

export default Polygraphy;