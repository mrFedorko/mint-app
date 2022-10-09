import React from 'react';

const NewOrder = () => {
    return(
        <div className="new-order">
            <div className="container">
                <div className="new-order__heading">Новый заказ:</div>
                <div className="new-order__wrapper">
                    <div className="new-order__block">Полиграфия</div>
                    <div className="new-order__group">
                        <div className="new-order__little-block">Табличка</div>
                        <div className="new-order__little-block">Баннер</div>
                        <div className="new-order__little-block">Вывеска</div>    
                    </div>
                    <div className="new-order__block">Сайт</div>
                </div>
            </div>
        </div>
    )
}
export default NewOrder