import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { convertCalcState, getPrice } from "../../../services/services.js";
import data from '../../../services/pricing.json'
import { bannerPostWorkCh, coloredCh, faceColorCh, heightCh, lightCh, sideColorCh, signMaterialCh, signTypeCh, sizeCh, typeCh, widthCh, wordCh } from "../../../store/signSlice.js";
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context.js';


const SignsCalculator = () => {
    
    const calculator = useSelector(state => state.sign.calculator);
    const {signType, type, colored, sideColor, faceColor, word, size, width, height, signMaterial, bannerPostWork} = calculator;
    const dispatch = useDispatch();

    const {isAuth} = useContext(AuthContext)
    
    const order = {
        'letter' : {type, colored, sideColor, faceColor, word, size},
        'sign' : {width, height, signMaterial},
        'banner' : {width, height, bannerPostWork}
    }

    const content = {
        'letter' : {
            left : <LetterCalcBlock />,
            right : <LetterDescrBlock calcState = {calculator}/>,
            style : {
                textShadow: type === 'volume' ? `1px 1px 1px ${sideColor},1px 2px 1px ${sideColor},1px 3px 1px ${sideColor},1px 4px 1px ${sideColor},1px 5px 1px ${sideColor},1px 6px 1px ${sideColor},1px 7px 1px ${sideColor},1px 8px 1px ${sideColor},1px 9px 1px ${sideColor},1px 10px 1px ${sideColor},1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)` : '1px 1px 1px #FFFAFA,1px 2px 1px 	#FFFAFA,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)',
                lineHeight: '1.2',
                fontSize: "100px",
                fontWeight: "700",
                fontFamily: "'Ubuntu', sans-serif",
                color: `${faceColor}`,
                WebkitTextStroke: `${colored === 'stroke' ? '3px white' : ''}`,
                marginBottom: '0.3em',
                padding: '0 20px 70px 40px'
            }
        },
        'sign' : { 
            left : <SignCalcBlock/>,
            right: <SignDescrBlock calcState = {calculator}/>,
            style : {
                width: "300px",
                height: "200px",
                background: 'url("icons/logo_main.png") center no-repeat',
                backgroundColor: 'white',
                border: '2px #4d897c solid',
                borderRadius: '7px'
            }
            
        },
        'banner' : {
            left : <BannerCalcBlock/>,
            right: <BannerDescrBlock calcState = {calculator}/>,
            style : {
                width: "300px",
                height: "200px",
                background: 'url("icons/logo_main.png") center no-repeat',
                border: '2px #4d897c solid',
                borderRadius: '3px'
            }
        },
        '' : {
            left: <></>,
            right:<></>
        }
    }


        return(
            <div className="calculator fadein">
                <h3 className = "mb-4">Калькулятор</h3>
                <div className="calculator__group">
                    <div className="calculator__input">
                        <div className="input-group mb-3">
                            <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Тип вывески</label>
                            <select value={signType} onChange={(e) =>  dispatch(signTypeCh(e.target.value))} className="form-select" id="">
                                <option defaultValue=""/>
                                <option value="letter">Объемные буквы</option>
                                <option value="sign">Таблички с УФ-печатью</option>
                                <option value="banner">Баннер 440</option>
                            </select>
                        </div>
                        
                        {content[signType].left}
                       
                    </div>
                    <div className="calculator__render">
                        <div className="calculator__render_img" style={content[signType].style}>{signType === 'letter' ? word : ''}</div>
                        <div className = "calculator__render_description">{content[signType].right}
                            {isAuth ? <button className='calculator__order-btn'>Оформить заказ</button> : <span className='Calculator_auth'>\
                            Для оформления заказа необходимо <a href="/personal">войти</a></span>}
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    
}

const LetterDescrBlock= (props) => {
   
    const {type, light, sideColor, faceColor, word, size,} = useSelector(state=>state.sign.calculator);



        return(
           
            <>
                <span>{+light && type!=='plate' ? 'Световые': 'Не световые'} {type === 'volume' ? 'объемные' : 'плоские'} буквы "{word}"</span>
                <ul>
                    <li> Средняя высота буквы: {size} см </li>
                    <li> Длинна вывески: {+size*(word.length)} см</li>
                    <li> Цвет боковин: {convertCalcState(sideColor)}</li>
                    <li> Цвет лицевой части: {convertCalcState(faceColor)}</li>
                    <li> Каркас: алюминиевая труба 15х15х1,5мм </li>
                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(props.calcState, data.pricing) } руб</span>
            </>
            
        )
    
}

const LetterCalcBlock = () =>  {
    
    const dispatch = useDispatch();
    const {type, light, colored, sideColor, faceColor, word, size,} = useSelector(state=>state.sign.calculator);

    
    return(
        <>
        <div className="input-group mb-3">
            <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Исполнение</label>
            <select value={type} onChange={(e) => dispatch(typeCh(e.target.value))}  className="form-select" id="">
                <option  defaultValue="" children= 'не выбран'/>
                <option value="plate">Из ПВХ 8мм</option>
                <option value="volume">Объемные</option>
            </select>
        </div>
        <div className="input-group mb-3">
            <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Подсветка</label>
            <select value={light} onChange={(e) => dispatch(lightCh(e.target.value))} className="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value={1}>С подсветкой</option>
                <option value={0}>Без подсветки</option>
            </select>
        </div>
        <div className="input-group mb-3">
            <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Лицевая часть</label>
            <select value={colored} onChange={(e) => dispatch(coloredCh(e.target.value))} className="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value="full">Сплошная</option>
                <option value="stroke">С контуром</option>
            </select>
        </div>
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Цвет боковой части</label>
            <select value={sideColor} onChange={(e) => dispatch(sideColorCh(e.target.value))} className="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value="lightgrey"> Белый</option>
                <option value="black"> Черный</option>
                <option value="crimson"> Красный</option>
                <option value="tomato"> Оранжевый</option>
                <option value="gold"> Желтый</option>
                <option value="darkolivegreen"> Зеленый</option>
                <option value="midnightblue"> Синий</option>
            </select>
        </div>
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Цвет лицевой части</label>
            <select value ={faceColor} onChange={(e) => dispatch(faceColorCh(e.target.value))} className="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value="white"> Белый</option>
                <option value="black"> Черный</option>
                <option value="red"> Красный</option>
                <option value="orange"> Оранжевый</option>
                <option value="yellow"> Желтый</option>
                <option value="green"> Зеленый</option>
                <option value="navy"> Синий</option>
            </select>
        </div>
           

        
        <input value={word} onChange={(e) => dispatch(wordCh(e.target.value))} type="text" className="form-control" aria-label="Sizing example input"          aria-describedby="inputGroup-sizing-sm" placeholder="Введите название"/>
        <input value={size} onChange={(e) => dispatch(sizeCh(e.target.value))} type="text" className="form-control mt-3" aria-label="Sizing example input"          aria-describedby="inputGroup-sizing-sm" placeholder="Введите высоту буквы, cм"/>
        </>
    )

}

const BannerDescrBlock = (props) => {
        
        const { width, height, bannerPostWork} = useSelector(state=>state.sign.calculator)
        

        return(
            <div className = "calculator__render_description">
                <span>Баннер плотностью 440гр/м.кв.</span>
                <ul>
                    <li> Ширина: {width} см</li>
                    <li> Длина: {height} см</li>
                    <li> Проклейка и люверсы: {bannerPostWork ? 'есть' : 'нет'}</li>

                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(props.calcState, data.pricing) } руб</span>
            </div>
        )
    
}

const BannerCalcBlock = () => {
    const { width, height, bannerPostWork} = useSelector(state=>state.sign.calculator)
        const dispatch = useDispatch();

        return(
            <>
                <input value={width} onChange={(e) => dispatch(widthCh(e.target.value))} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                <input value = {height} onChange={(e) => dispatch(heightCh(e.target.value))} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                <div className="input-group mt-3">
                    <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Пост обработка</label>
                    <select value={bannerPostWork} onChange={(e) => dispatch(bannerPostWorkCh(e.target.value))}  className="form-select" id="">
                    <option defaultValue="" children= 'не выбран'/>                        
                    <option value="1">Проклейка + люверсы по контуру</option>
                        <option value="0">Без обработки</option>
                    </select>
                </div>
            </>
        )
    
}

const SignDescrBlock = (props) => {
    
    const {width, height, signMaterial} = useSelector(state=>state.sign.calculator)
        return(
            <div className = "calculator__render_description">
                <span>Табличка с уф-печатью</span>
                <ul>
                    <li> Ширина: {width} см</li>
                    <li> Длина: {height} см</li>
                    <li> Материал: {convertCalcState(signMaterial)}</li>

                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(props.calcState, data.pricing) } руб</span>
            </div>
        )
    
}

const SignCalcBlock = () => {
        const {width, height, signMaterial} = useSelector(state=>state.sign.calculator)
        const dispatch = useDispatch();

        return(
            <>
                <input value={width} onChange={(e) => dispatch(widthCh(e.target.value))} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                <input value={height} onChange={(e) => dispatch(heightCh(e.target.value))} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                <div className="input-group mt-3">
                    <label className="input-group-text w-40" htmlFor="inputGroupSelect01">Материал</label>
                    <select value={signMaterial} onChange={(e) => dispatch(signMaterialCh(e.target.value))}  className="form-select" id="">
                        <option defaultValue="" children= 'не выбран'/>
                        <option value="PVC3">пластик ПВХ 3мм</option>
                        <option value="PVC5">пластик ПВХ 5мм</option>
                        <option value="ACP3">алюминиевая композитная панель 3мм</option>
                    </select>
                </div>
            </>
        )
    
}

export default SignsCalculator