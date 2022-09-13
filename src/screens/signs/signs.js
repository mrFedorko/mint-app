import React, { Component } from "react";
import { convertCalcState, getPrice } from "../../services/services.js";


import "./signs.scss"
import data from '../../services/pricing.json'





//////////**************************USEFUL INFO BLOCK
////////////////////////////////////////////////////





class SignsUseful extends Component{
    render = () => {
        return(
            <div className="signs__info">
                <h3>Выбираем наружную рекламу для ваших целей и бюджета</h3>
                <span>Наружная реклама - это первое, с чем сталкивается клиент, посещая Вашу компанию. Поэтому важно, чтобы реклама вызывала позитивные впечатления и располагала к сотрудничеству! </span>
                <span>Давайте определимся - что вам нужно</span>
                
                <div className="sign__block">
                    <h5 className="sign__title">Объемные буквы</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__info">Это самый популярный и привлекательный вид вывесок. Они могут быть изготовлены из акрилового стекла, пластика ПВХ, композитных материалов, оцинкованной стали, меди, дерева и пр. Очень часто объемные буквы делают световыми. Вариантов исполнения множество, выбор - за вами.<br/>
                        Несмотря на высокую стоимость, объемные буквы позволят сэкономить за счет длительного срока эксплуатации, а также избавят от проблем с городской администрацией. Именно такие вывески в настоящее время являются законными!
                        </div>

                    </div>
                    <div class="btn-group mt-1" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  this.props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>

                <div className="sign__block">
                    <h5 className="sign__title">Плоские таблички из пластика</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__info">Нанесенное на пластик ПВХ изображение методом прямой печати. Ее главные преимущества - низкая цена, сжатые сроки изготовления и монтажа.<br/>
                        Чаще всего их используют внутри помещений, в качестве временных вывесок на фасаде, а также на специально согласованных рекламных площадях (на фасадах торговых центров).
                        
                        </div>

                    </div>
                    <div class="btn-group mt-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  this.props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>
                
                <div className="sign__block">
                    <h5 className="sign__title">Оформление баннером</h5>
                    <div className="sign__group">
                        <div className="sign__img"><img className="rounded float-start" src="./img/lettersMainPhoto.jpg" alt="letters"></img></div>
                        <div className="sign__info"> Баннер с широкоформатной печатью, который крепиться к фасаду здания. Самый недорогой вид оформления. Баннеры используют в качестве временных вывесок, или временных указателей.
                        
                        </div>

                    </div>
                    <div class="btn-group mt-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-secondary">Примеры работ</button>
                        <button onClick = {() =>  this.props.onActiveChange('calc')} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                    </div>
                </div>

            </div>
        )
    }
}




//////////**************************CALCULATOR BLOCK
////////////////////////////////////////////////////




class SignCalculator extends Component{
    
    state = {
        signType: '',
        type: '',
        light:'',
        colored: '',
        sideColor: '',
        faceColor: '',
        word: '',
        size: '',
        width : '',
        height: '',
        signMaterial: '',
        bannerPostWork: '' 

    }

    onChangeSignType = (value) => {
        const signType = value
        this.setState({signType})
        
    }

    
    
    render = () => {

       

        Object.entries({...this.state}).forEach(item => {
            localStorage.setItem(item[0], item[1])
        });

        console.log(localStorage);
        
        

        const {signType} = this.state;
        const content = {
            'letter' : {
                left : <LetterCalcBlock 
                onTypeChange = {(value) => this.setState({type: value})} 
                onLightChange = {(value) => this.setState({light: +value})} 
                onColoredChange = {(value) => this.setState({colored: value})}
                onSideColorChange = {(value) => this.setState({sideColor: value})} 
                onFaceColorChange = {(value) => this.setState({faceColor: value})} 
                onWordChange = {(value) => this.setState({word: value})} 
                onSizeChange = {(value) => this.setState({size: +value})}/>,
                right : <LetterDescrBlock calcState = {this.state}/>,
                style : {
                    textShadow: this.state.type === 'volume' ? `1px 1px 1px ${this.state.sideColor},1px 2px 1px ${this.state.sideColor},1px 3px 1px ${this.state.sideColor},1px 4px 1px ${this.state.sideColor},1px 5px 1px ${this.state.sideColor},1px 6px 1px ${this.state.sideColor},1px 7px 1px ${this.state.sideColor},1px 8px 1px ${this.state.sideColor},1px 9px 1px ${this.state.sideColor},1px 10px 1px ${this.state.sideColor},1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)` : '1px 1px 1px #FFFAFA,1px 2px 1px 	#FFFAFA,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)',
                    lineHeight: '1.2',
                    fontSize: "100px",
                    fontWeight: "700",
                    fontFamily:  "'Ubuntu', sans-serif",
                    color: `${this.state.faceColor}`,
                    WebkitTextStroke : `${this.state.colored === 'stroke' ? '3px white' : ''}`,
                    marginBottom : '0.3em'
                }
            },
            'sign' : { 
                left : <SignCalcBlock
                onWidthChange = {(value) => this.setState({width: +value})} 
                onHeightChange = {(value) => this.setState({height: +value})} 
                onSignMaterialChange = {(value) => this.setState({signMaterial: value})}/>,
                right: <SignDescrBlock calcState = {this.state}/>,
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
                left : <BannerCalcBlock 
                onWidthChange = {(value) => this.setState({width: +value})} 
                onHeightChange = {(value) => this.setState({height: +value})} 
                onBannerPostWorkChange = {(value) => this.setState({bannerPostWork: +value})}/>,
                right: <BannerDescrBlock calcState = {this.state}/>,
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
            <div className="calculator">
                <h3 className = "mb-2">Калькулятор</h3>
                <div className="calculator__group">
                    <div className="calculator__input">
                        <div class="input-group mb-3">
                            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Тип вывески</label>
                            <select  onChange={(e) =>  this.onChangeSignType(e.target.value)} class="form-select" id="">
                            <option defaultValue={''} />
                                <option value="letter">Объемные буквы</option>
                                <option value="sign">Таблички с УФ-печатью</option>
                                <option value="banner">Баннер 440</option>
                            </select>
                        </div>
                        
                        {content[signType].left}
                       
                    </div>
                    <div className="calculator__render">
                        <div className="calculator__render_img" style={content[signType].style}>{signType === 'letter' ? this.state.word : ''}</div>
                        {content[signType].right}
                    </div>
                </div>
            </div>
        )
    } 
}

class LetterDescrBlock extends Component{
   
    render = () => {
        
        const {type, light, sideColor, faceColor, word, size} = this.props.calcState
        


        return(
            <div className = "calculator__render_description">
                <span>{+light && type!=='plate' ? 'Световые': 'Не световые'} {type === 'volume' ? 'объемные' : 'плоские'} буквы "{word}"</span>
                <ul>
                    <li> Средняя высота буквы: {size} см </li>
                    <li> Длинна вывески: {+size*(word.length)} см</li>
                    <li> Цвет боковин: {convertCalcState(sideColor)}</li>
                    <li> Цвет лицевой части: {convertCalcState(faceColor)}</li>
                    <li> Каркас: алюминиевая труба 15х15х1,5мм </li>
                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(this.props.calcState, data.pricing) } руб</span>
            </div>
        )
    }
}

class LetterCalcBlock extends Component {
    
render = () => {
    const {onTypeChange, onLightChange, onColoredChange, onSideColorChange, onWordChange, onSizeChange, onFaceColorChange} = this.props

    
    return(
        <>
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Исполнение</label>
            <select onChange={(e) => onTypeChange(e.target.value)}  class="form-select" id="">
                <option defaultValue={'plate'} />
                <option value="plate">Из ПВХ 8мм</option>
                <option value="volume">Объемные</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Подсветка</label>
            <select onChange={(e) => onLightChange(e.target.value)} class="form-select" id="">
                <option defaultValue={0} />
                <option value={1}>С подсветкой</option>
                <option value={0}>Без подсветки</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Лицевая часть</label>
            <select onChange={(e) => onColoredChange(e.target.value)} class="form-select" id="">
                <option defaultValue={'full'} />
                <option value="full">Сплошная</option>
                <option value="stroke">С контуром</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" htmlFor="inputGroupSelect01">Цвет боковой части</label>
            <select onChange={(e) => onSideColorChange(e.target.value)} class="form-select" id="">
                <option defaultValue={'white'} />
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
            <select onChange={(e) => onFaceColorChange(e.target.value)} class="form-select" id="">
                <option defaultValue={'white'} />
                <option value="white"> Белый</option>
                <option value="black"> Черный</option>
                <option value="red"> Красный</option>
                <option value="orange"> Оранжевый</option>
                <option value="yellow"> Желтый</option>
                <option value="green"> Зеленый</option>
                <option value="navy"> Синий</option>
            </select>
        </div>
           

        
        <input onChange={(e) => onWordChange(e.target.value)} type="text" className="form-control" aria-label="Sizing example input"          aria-describedby="inputGroup-sizing-sm" placeholder="Введите название"/>
        <input onChange={(e) => onSizeChange(e.target.value)} type="text" className="form-control mt-3" aria-label="Sizing example input"          aria-describedby="inputGroup-sizing-sm" placeholder="Введите высоту буквы, cм"/>
        </>
    )
}
}

class BannerDescrBlock extends Component{
    render = () => {
        
        const {bannerPostWork, width, height} = this.props.calcState
        

        return(
            <div className = "calculator__render_description">
                <span>Баннер плотностью 440гр/м.кв.</span>
                <ul>
                    <li> Ширина: {width} см</li>
                    <li> Длина: {height} см</li>
                    <li> Проклейка и люверсы: {bannerPostWork ? 'есть' : 'нет'}</li>

                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(this.props.calcState, data.pricing) } руб</span>
            </div>
        )
    }
}

class BannerCalcBlock extends Component{
    render = () => {
        const {onWidthChange, onHeightChange, onBannerPostWorkChange} = this.props
        return(
            <>
                <input onChange={(e) => onWidthChange(e.target.value)} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                <input onChange={(e) => onHeightChange(e.target.value)} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                <div class="input-group mt-3">
                    <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Пост обработка</label>
                    <select onChange={(e) => onBannerPostWorkChange(e.target.value)}  class="form-select" id="">
                        <option defaultValue={true} />
                        <option value="1">Проклейка + люверсы по контуру</option>
                        <option value="0">Без обработки</option>
                    </select>
                </div>
            </>
        )
    }
}

class SignDescrBlock extends Component{
    render = () => {
        const {signMaterial, width, height} = this.props.calcState;
        return(
            <div className = "calculator__render_description">
                <span>Табличка с уф-печатью</span>
                <ul>
                    <li> Ширина: {width} см</li>
                    <li> Длина: {height} см</li>
                    <li> Материал: {convertCalcState(signMaterial)}</li>

                </ul>
                <span>Итоговая стоимость (без учета монтажа): {
                    getPrice(this.props.calcState, data.pricing) } руб</span>
            </div>
        )
    }
}

class SignCalcBlock extends Component{
    render = () => {
        const {onWidthChange, onHeightChange, onSignMaterialChange} = this.props
        return(
            <>
                <input onChange={(e) => onWidthChange(e.target.value)} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                <input onChange={(e) => onHeightChange(e.target.value)} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                <div class="input-group mt-3">
                    <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Материал</label>
                    <select onChange={(e) => onSignMaterialChange(e.target.value)}  class="form-select" id="">
                        <option defaultValue={''} />
                        <option value="PVC3">пластик ПВХ 3мм</option>
                        <option value="PVC5">пластик ПВХ 5мм</option>
                        <option value="ACP3">алюминиевая композитная панель 3мм</option>
                    </select>
                </div>
            </>
        )
    }
}



//////////**************************HOW TO ORDER BLOCK
////////////////////////////////////////////////////



class SignsOrder extends Component{
    render = () => {
        return(
            <>
                <div className="order">
                    <h3 >Как заказать...</h3>
                    <div className="oredr__descr">
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
}



export default class Signs extends Component{
    
    state = {
        active: 'useful'
    }

    stateActiveSetter = (page) => {
        this.setState({
            active : page
        })
    }
    

    render = () => {
        
        const {active} = this.state
        
        return(
           <section className="signs">
                <div className="container">
                    <div className="signs__header">
                        <div className="signs__buttons">
                            <button onClick={() => this.stateActiveSetter('useful')} className="signs__button btn btn-light">Полезная информация</button>
                            <button  onClick={() => this.stateActiveSetter('calc')}  className="signs__button btn btn-light">Онлайн калькулятор</button>
                            <button onClick={() => this.stateActiveSetter('order')}  className="signs__button btn btn-light">Как заказать</button>
                        </div>
                        <h1 className="signs__title">Вывески</h1>
                    </div>
                   {active === 'useful' ? <SignsUseful onActiveChange = {(a) => this.stateActiveSetter(a) }/> : active === 'calc' ? <SignCalculator/> : active === 'order' ? <SignsOrder/> : <SignsUseful/>}
                </div>
           </section>
        )
    }
}