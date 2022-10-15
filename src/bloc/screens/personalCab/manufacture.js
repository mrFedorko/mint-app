import React from 'react';

const Manufacture = () => {
    return(
        // manu - manufacture
         <div className="manu"> 
         <div className="container">
             <div className="manu__heading">Заказы в работе</div>
             <div className="manu__strip">
                 <div className="manu__number">3</div>
                 <div className="manu__wrapper">
                     <div className="manu__date">12:57  08.08.2020</div>
                     <div className="manu__info">
                         <div className="manu__icon"><img src="../icons/poligrafy_icons/cards.png" alt="" /></div>
                         <div className="manu__definition">
                             <div className="manu__inner">
                                 <div className="manu__order-name">Визитные карточки 4+4</div>
                                 <div className="manu__order-detales">1000 шт</div>
                             </div>
                             <div className="manu__comment">“Визитки для соседа”</div>
                         </div>
                         <div className="manu__control">
                             <div className="manu__control-group">
                                 <div className="manu__control-parametr">Статус заказа:</div>
                                 <div className="manu__control-value">макет утвержден <br /> ожидание оплаты</div>
                             </div>
                             <div className="manu__control-group">
                                 <div className="manu__control-parametr">Дата готовности:</div>
                                 <div className="manu__control-value">до 10 дней после оплаты</div>
                             </div>
                         </div>
                         <div className="manu__buttons">
                             <button type="button" class="manu__button manu__button_edit" href="/">
                                 <img src="../icons/edit.png" alt="edit"/>
                                 Редактировать
                             </button>
                             <button type="button" class="manu__button manu__button_cansel" href="/">
                                 <img src="../icons/cansel.png" alt="edit"/>
                                 Отменить
                             </button>
                             <button type="button" class="manu__button manu__button_pay" href="/">
                                 <div className="manu__sum">2000 руб</div>
                                 <div className="manu__pay">Оплатить</div>
                             </button>
                         </div>
                         <div className="manu__documents">
                             <button type="button" class="manu__chek" href="/">Счёт</button>
                             <button type="button" class="manu__invoice" href="/">Накладная</button>
                         </div>
                     </div>
                 </div>
             </div>
         
         </div>
     </div>
    )
}
export default Manufacture