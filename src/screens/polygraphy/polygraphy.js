import React, { Component } from "react";

import '../../sass/sassTemplates/hat.scss'
import "../../sass/base/_base.scss"
import "./polygraphy.scss"
export default class Polygraphy extends Component {
    
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
            <section className="hat">
                    <div className="container">
                        <div className="hat__header">
                            <div className="hat__buttons">
                                <button onClick={() => this.stateActiveSetter('useful')} className={"hat__button"+ (active === 'useful' ? ' signs__button_active' : '')}>Полезная информация</button>
                                <button onClick={() => this.stateActiveSetter('calc')} className={"hat__button"+ (active === 'calc' ? ' signs__button_active' : '')}>Онлайн калькулятор</button>
                                <button onClick={() => this.stateActiveSetter('order')}  className={"hat__button"+ (active === 'order' ? ' signs__button_active' : '')}>Как заказать</button>
                            </div>
                            <h1 className="hat__title">Полиграфия</h1>
                        </div>
                        <img className="polygraphy__img" src="img/flayers.png" alt="flayers"/>
                    </div>
            </section>
        )
    }
}