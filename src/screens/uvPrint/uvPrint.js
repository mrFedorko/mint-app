import React, { Component } from "react";

export default class UvPrint extends Component{
    render = () => {
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
                   {/* {active === 'useful' ? <SignsUseful onActiveChange = {(a) => this.stateActiveSetter(a) }/> : active === 'calc' ? <SignCalculator/> : active === 'order' ? <SignsOrder/> : <SignsUseful/>} */}
                </div>
           </section>
        )
    }
}