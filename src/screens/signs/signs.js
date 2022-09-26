import React from "react";
import { useSelector, useDispatch } from "react-redux";




import { convertCalcState, getPrice } from "../../services/services.js";

import'../../sass/sassTemplates/hat.scss';
import "../../sass/base/_base.scss";
import "./signs.scss";
import "../../sass/sassTemplates/calculator.scss"

import data from '../../services/pricing.json'
import { activeCh, bannerPostWorkCh, coloredCh, faceColorCh, heightCh, lightCh, sideColorCh, signMaterialCh, signTypeCh, sizeCh, typeCh, widthCh, wordCh } from "../../store/signSlice.js";


const Signs  = () => {
    const active = useSelector((state) => state.sign.active)
    const dispatch = useDispatch();
        
        return(
            <>
                <section className="hat">
                    <div className="container">
                        <div className="hat__header">
                            <div className="hat__buttons">
                                <button onClick={() => dispatch(activeCh('useful'))} className={"hat__button"+ (active === 'useful' ? ' hat__button_active' : '')}>Полезная информация</button>
                                <button onClick={() => dispatch(activeCh('calc'))} className={"hat__button"+ (active === 'calc' ? ' hat__button_active' : '')}>Онлайн калькулятор</button>
                                <button onClick={() => dispatch(activeCh('order'))}  className={"hat__button"+ (active === 'order' ? ' hat__button_active' : '')}>Как заказать</button>
                            </div>
                            <h1 className="hat__title">Вывески</h1>
                        </div>
                    </div>
                </section>
                <section className="signs">
                    <div className="container">
                        {active === 'useful' ? <SignsUseful onActiveChange = {(a) => dispatch(activeCh(a)) }/> : active === 'calc' ? <SignCalculator/> : active === 'order' ? <SignsOrder/> : <SignsUseful/>}
                    </div>
                </section> 
            </>
        )
    
}


//////////**************************USEFUL INFO BLOCK
////////////////////////////////////////////////////





const SignsUseful = (props) => {
        return(
            <div className="sign fadein">
                <h3 className="sign__header">Выбираем наружную рекламу для ваших целей и бюджета</h3>
                <div className="sign__wrapper">
                    <div className="sign__subheader">Наружная реклама - это первое, с чем сталкивается клиент, посещая Вашу компанию. Поэтому важно, чтобы реклама вызывала позитивные впечатления и располагала к сотрудничеству! <br/> Давайте определимся - что вам нужно</div>
                    <img className="sign__subheader-pic" src="./img/wat.png" alt="letters"></img>
                </div>
                
                <div className="sign__block">
                    <h5 className="sign__title">Объемные буквы</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__descr">Это самый популярный и привлекательный вид вывесок. Они могут быть изготовлены из акрилового стекла, пластика ПВХ, композитных материалов, оцинкованной стали, меди, дерева и пр. Очень часто объемные буквы делают световыми. Вариантов исполнения множество, выбор - за вами.<br/>
                        Несмотря на высокую стоимость, объемные буквы позволят сэкономить за счет длительного срока эксплуатации, а также избавят от проблем с городской администрацией. Именно такие вывески в настоящее время являются законными!
                        </div>

                    </div>
                    <div class="btn-group mt-1" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>

                <div className="sign__block">
                    <h5 className="sign__title">Плоские таблички из пластика</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__descr">Нанесенное на пластик ПВХ изображение методом прямой печати. Ее главные преимущества - низкая цена, сжатые сроки изготовления и монтажа.<br/>
                        Чаще всего их используют внутри помещений, в качестве временных вывесок на фасаде, а также на специально согласованных рекламных площадях (на фасадах торговых центров).                  
                        </div>

                    </div>
                    <div class="btn-group mt-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>
                
                <div className="sign__block">
                    <h5 className="sign__title">Оформление баннером</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__descr"> Баннер с широкоформатной печатью, который крепиться к фасаду здания. Самый недорогой вид оформления. Баннеры используют в качестве временных вывесок, или временных указателей.
                        
                        </div>

                    </div>
                    <div class="btn-group mt-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>

            </div>
        )
    
}




//////////**************************CALCULATOR BLOCK
////////////////////////////////////////////////////



const SignCalculator = () => {
    
    const calculator = useSelector(state => state.sign.calculator);
    const {signType, type, colored, sideColor, faceColor, word} = calculator;
    const dispatch = useDispatch();

    console.log(sideColor);
        

       
        const content = {
            'letter' : {
                left : <LetterCalcBlock />,
                right : <LetterDescrBlock calcState = {calculator}/>,
                style : {
                    textShadow: type === 'volume' ? `1px 1px 1px ${sideColor},1px 2px 1px ${sideColor},1px 3px 1px ${sideColor},1px 4px 1px ${sideColor},1px 5px 1px ${sideColor},1px 6px 1px ${sideColor},1px 7px 1px ${sideColor},1px 8px 1px ${sideColor},1px 9px 1px ${sideColor},1px 10px 1px ${sideColor},1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)` : '1px 1px 1px #FFFAFA,1px 2px 1px 	#FFFAFA,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)',
                    lineHeight: '1.2',
                    fontSize: "100px",
                    fontWeight: "700",
                    fontFamily:  "'Ubuntu', sans-serif",
                    color: `${faceColor}`,
                    WebkitTextStroke : `${colored === 'stroke' ? '3px white' : ''}`,
                    marginBottom : '0.3em',
                   
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
                        <div class="input-group mb-3">
                            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Тип вывески</label>
                            <select value={signType} onChange={(e) =>  dispatch(signTypeCh(e.target.value))} class="form-select" id="">
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
                        <div className = "calculator__render_description">{content[signType].right}</div>
                        
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
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Исполнение</label>
            <select value={type} onChange={(e) => dispatch(typeCh(e.target.value))}  class="form-select" id="">
                <option  defaultValue="" children= 'не выбран'/>
                <option value="plate">Из ПВХ 8мм</option>
                <option value="volume">Объемные</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Подсветка</label>
            <select value={light} onChange={(e) => dispatch(lightCh(e.target.value))} class="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value={1}>С подсветкой</option>
                <option value={0}>Без подсветки</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Лицевая часть</label>
            <select value={colored} onChange={(e) => dispatch(coloredCh(e.target.value))} class="form-select" id="">
                <option defaultValue="" children= 'не выбран'/>
                <option value="full">Сплошная</option>
                <option value="stroke">С контуром</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" htmlFor="inputGroupSelect01">Цвет боковой части</label>
            <select value={sideColor} onChange={(e) => dispatch(sideColorCh(e.target.value))} class="form-select" id="">
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
        <div class="input-group mb-3">
            <label class="input-group-text" htmlFor="inputGroupSelect01">Цвет лицевой части</label>
            <select value ={faceColor} onChange={(e) => dispatch(faceColorCh(e.target.value))} class="form-select" id="">
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
                <div class="input-group mt-3">
                    <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Пост обработка</label>
                    <select value={bannerPostWork} onChange={(e) => dispatch(bannerPostWorkCh(e.target.value))}  class="form-select" id="">
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
                <div class="input-group mt-3">
                    <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Материал</label>
                    <select value={signMaterial} onChange={(e) => dispatch(signMaterialCh(e.target.value))}  class="form-select" id="">
                        <option defaultValue="" children= 'не выбран'/>
                        <option value="PVC3">пластик ПВХ 3мм</option>
                        <option value="PVC5">пластик ПВХ 5мм</option>
                        <option value="ACP3">алюминиевая композитная панель 3мм</option>
                    </select>
                </div>
            </>
        )
    
}



//////////**************************HOW TO ORDER BLOCK
////////////////////////////////////////////////////



const SignsOrder = () => {
   
        return(
            <>
                <div className="order fadein">
                    <h3 >Как заказать...</h3>
                    <div className="order__descr">
                        Для вашего удобства мы создали сервис заказов онлайн.
                        Оформите заказ через личный кабинет и оцените приимущества
                        сотрудничества с нами. Наблюдайте за стадией готовности вашего заказа
                        в режиме реального времени, доставкой. Скачивайте документы по заказам,
                        консультируйтесь с нашими специалистами.<br/><br/>

                        Также, мы оставили возможность заказа без регистрации.
                        Позвоните по номеру выше и наш менеджер поможет вам сделать заказ.<br/><br/>

                        При заказе вывески с объемными или плоскими буквами, наши специалисты 
                        свяжутся с вами в любом случаи для уточнения деталей заказа.



                    </div>
                </div>
            </>
        )
    
}

export default Signs;

