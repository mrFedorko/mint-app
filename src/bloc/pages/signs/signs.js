import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet} from 'react-router-dom';



import'../../../sass/sassTemplates/hat.scss';
import'../../../sass/sassTemplates/useful.scss';
import '../../../sass/base/_base.scss';
import './signs.scss';
import '../../../sass/sassTemplates/calculator.scss';
import { LoadingPage } from '../../loading/loading';



const Signs  = () => {
    
    const [active, setActive] = useState('useful');
    const [starting, setStarting] = useState(true)
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            return setStarting(false)
        }, 300);
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
      })
    
    console.log('render signs')

    return(
        <>
            {starting && <LoadingPage/>}
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
                    <Outlet context={[active, setActive]}/>
                </div>
            </section> 
        </>
    );
    
};


export default Signs;

