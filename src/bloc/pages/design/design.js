import React, { Component } from 'react';
import '../../../sass/sassTemplates/hat.scss';
export default class Design extends Component{
    render = () => {
        return(
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => this.stateActiveSetter('useful')} className="hat__button ">Полезная информация</button>
                            <button  onClick={() => this.stateActiveSetter('calc')}  className="hat__button">Онлайн калькулятор</button>
                            <button onClick={() => this.stateActiveSetter('order')}  className="hat__button">Как заказать</button>
                        </div>
                        <h1 className="hat__title">Дизайн</h1>
                    </div>
                    {/* {active === 'useful' ? <SignsUseful onActiveChange = {(a) => this.stateActiveSetter(a) }/> : active === 'calc' ? <SignCalculator/> : active === 'order' ? <SignsOrder/> : <SignsUseful/>} */}
                </div>
            </section>
        );
    };
}