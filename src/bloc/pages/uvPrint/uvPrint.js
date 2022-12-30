import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './uvPrint.scss';
import '../../../sass/sassTemplates/hat.scss';
import '../../../sass/sassTemplates/calculator.scss';

import '../../../sass/sassTemplates/hat.scss';
import data from '../../../services/pricing.json';
import { convertCalcState, getPrice } from '../../../services/services.js';
import { heightCh, signMaterialCh, widthCh } from '../../../store/uvprintSlice';
import SignsCalculator from '../signs/signsCalculator';
import { UvUseful } from './uvUseful';

import { signTypeCh } from '../../../store/signSlice';

const UvPrint = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState('useful');

    const { signType } = useSelector(state => state.sign.calculator)
   


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        dispatch(signTypeCh('uv'));
    })

    console.log(signType)


    return(
        <section className="hat">
            <div className="container">
                <div className="hat__header">
                    <div className="hat__buttons">
                        <button onClick={() => setActive('useful')} className={'hat__button'+ (active === 'useful' ? ' hat__button_active' : '')}>Информация</button>
                        <button onClick={() => setActive('calc')} className={'hat__button'+ (active === 'calc' ? ' hat__button_active' : '')}>Онлайн заказ</button>
                    </div>
                    <h1 className="hat__title">УФ-печать</h1>
                </div>
                { active === 'calc' && <SignsCalculator blocked={true}/>}
                { active === 'useful' && <UvUseful/>}
            </div>
        </section>
    );
    
};


export default UvPrint;
 

