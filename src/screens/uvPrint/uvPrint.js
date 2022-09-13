import React, { Component } from "react";

import data from '../../services/pricing.json'
import { convertCalcState, getPrice } from "../../services/services.js"

export default class UvPrint extends Component{
    
    state = {
        active : 'useful'
    }

    stateActiveSetter = (page) => {
        this.setState({
            active : page
        })
    }
    
    render = () => {
        return(
            <section className="uvprint">
                <div className="container">
                    <div className="uvprint__header">
                        <div className="uvprint__buttons">
                            <button  onClick={() => this.stateActiveSetter('useful')} className="uvprint__button btn btn-light">Информация</button>
                            <button  onClick={() => this.stateActiveSetter('calc')}  className="uvprint__button btn btn-light">Онлайн заказ</button>
                        </div>
                        <h1 className="uvprint__title">УФ-печать</h1>
                    </div>
                    <UvPrintCalculator/>
                </div>
           </section>
        )
    }
}
class UvPrintCalculator extends Component {
    state = {
        signType: 'sign',
        signMaterial: '',
        width: '',
        height: '',
    } 


    
    render() { 
        
        const {signMaterial, width, height} = this.state

        return (

            <div className="calculator">
            <h3 className = "mb-2">Калькулятор</h3>
                <div className="calculator__group">
                    <div className="calculator__input">
                        <input onChange={(e) => this.setState({ width: e.target.value})} type="text" className="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите ширину, см"/>
                        <input onChange={(e) => this.setState({ height: e.target.value})} type="text" className="form-control mt-3" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm" placeholder="Введите длину, cм"/> 
                        <div class="input-group mt-3">
                            <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Материал</label>
                            <select onChange={(e) => this.setState({ signMaterial: e.target.value})}  class="form-select" id="">
                                <option defaultValue={''} />
                                <option value="PVC3">пластик ПВХ 3мм</option>
                                <option value="PVC5">пластик ПВХ 5мм</option>
                                <option value="ACP3">алюминиевая композитная панель 3мм</option>
                            </select>
                        </div>
                    </div>
                    <div className="calculator__render">
                        <div className="calculator__render_img"></div>
                        <div className = "calculator__render_description">
                            <span>Табличка с уф-печатью</span>
                            <ul>
                                <li> Ширина: {width} см</li>
                                <li> Длина: {height} см</li>
                                <li> Материал: {convertCalcState(signMaterial)}</li>

                            </ul>
                            <span>Итоговая стоимость (без учета монтажа): {
                                getPrice(this.state, data.pricing) } руб</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 

