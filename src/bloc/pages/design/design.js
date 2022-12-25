import React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../../sass/sassTemplates/hat.scss';
import'../../../sass/sassTemplates/useful.scss';
import './design.scss';

const Design  = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('useful')
        return(
            <>
                <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => {setActive('useful'); navigate('/design')}} className={'hat__button'+ (active === 'useful' ? ' hat__button_active' : '')} >Виды услуг</button>
                            <button  onClick={() => {setActive('chek'); navigate('/design/chek')}}  className={'hat__button'+ (active === 'chek' ? ' hat__button_active' : '')}>Чек-лист заказчику</button>
                            <button  onClick={() => {setActive('require'); navigate('/design/require')}}  className={'hat__button'+ (active === 'require' ? ' hat__button_active' : '')}> Требования к макету</button>
                        </div>
                        <h1 className="hat__title">Дизайн</h1>
                    </div>
                    
                </div>
            </section>
            <section className="design">
                <div className="container">
                    <Outlet/>
                </div>
            </section> 
            </>
        );
}

export default Design;