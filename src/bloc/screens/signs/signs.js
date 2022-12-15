import React, { useState } from 'react';
import { useNavigate, Outlet} from 'react-router-dom';



import'../../../sass/sassTemplates/hat.scss';
import'../../../sass/sassTemplates/useful.scss';
import '../../../sass/base/_base.scss';
import './signs.scss';
import '../../../sass/sassTemplates/calculator.scss';



const Signs  = () => {
    
    const [active, setActive] = useState('useful');
    const navigate = useNavigate();
    

    
    return(
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => {setActive('useful'); navigate('/signs');} } className={'hat__button'+ (active === 'useful' ? ' hat__button_active' : '')}>Полезная информация</button>
                            <button onClick={() => {setActive('calc'); navigate('/signs/calculator');}} className={'hat__button'+ (active === 'calc' ? ' hat__button_active' : '')}>Онлайн калькулятор</button>
                            <button onClick={() => {setActive('order'); navigate('/signs/order');}}  className={'hat__button'+ (active === 'order' ? ' hat__button_active' : '')}>Как заказать</button>
                        </div>
                        <h1 className="hat__title">Вывески</h1>
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


export default Signs;

