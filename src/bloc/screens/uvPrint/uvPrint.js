import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './uvPrint.scss';
import '../../../sass/sassTemplates/hat.scss';
import '../../../sass/sassTemplates/calculator.scss';

import '../../../sass/sassTemplates/hat.scss';
import data from '../../../services/pricing.json';
import { convertCalcState, getPrice } from '../../../services/services.js';
import { heightCh, signMaterialCh, widthCh } from '../../../store/uvprintSlice';

const UvPrint = () => {
    
    const [active, setActive] = useState('useful');

   


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
                <UvPrintCalculator/>
            </div>
        </section>
    );
    
};
const UvPrintCalculator = () =>  {
    
    const {width, height, signMaterial} = useSelector(state => state.uvprint);
    const state = useSelector(state => state.uvprint);
    const dispatch = useDispatch();

    const renderImgStyle = {
            
        width: '300px',
        height: '200px',
        background: 'url("../../../public/icons/logo_main.png") center no-repeat',
        backgroundColor: 'white',
        border: '2px #4d897c solid',
        borderRadius: '7px',
    };
   
        

    return (
        <div className="uvPrint">
            <div className="container">
                <div className="calculator">
                    <h3 className = "mb-2">Калькулятор</h3>
                    <div className="calculator__group">
                        <div className="calculator__input">
                            <input onChange={(e) => dispatch(widthCh(e.target.value))} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                            <input onChange={(e) => dispatch(heightCh(e.target.value))} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                            <div class="input-group mt-3">
                                <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Материал</label>
                                <select onChange={(e) => dispatch(signMaterialCh(e.target.value))}  class="form-select" id="">
                                    <option defaultValue={''} />
                                    <option value="PVC3">пластик ПВХ 3мм</option>
                                    <option value="PVC5">пластик ПВХ 5мм</option>
                                    <option value="ACP3">алюминиевая композитная панель 3мм</option>
                                </select>
                            </div>
                        </div>
                        <div className="calculator__render">
                            <div style={renderImgStyle}></div>
                            <div className = "calculator__render_description">
                                <span>Табличка с уф-печатью</span>
                                <ul>
                                    <li> Ширина: {width} см</li>
                                    <li> Длина: {height} см</li>
                                    <li> Материал: {convertCalcState(signMaterial)}</li>

                                </ul>
                                <span>Итоговая стоимость (без учета монтажа): {
                                    getPrice(state, data.pricing) } руб</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default UvPrint;
 

