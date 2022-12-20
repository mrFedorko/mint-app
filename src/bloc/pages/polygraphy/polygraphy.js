import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


import '../../../sass/sassTemplates/hat.scss';
import '../../../sass/base/_base.scss';
import './polygraphy.scss';
import { LoadingPage } from '../../loading/loading';


const Polygraphy = () =>  {
    
    const [active, setActive] = useState('useful');
    const [starting, setStarting] = useState(true)


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        setTimeout(() => {
            return setStarting(false)
        }, 300);
    })

    const navigate = useNavigate();
    return(
        <div>
            {starting && <LoadingPage/>}
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
            <section className="polygraphy">
                <div className="container">
                    <Outlet/>
                </div>
            </section> 
        </div>
    );
    
};

export default Polygraphy;