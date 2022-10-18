
import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


import './sass/pesonal.scss'
import './sass/profile.scss'
import './sass/new-order.scss'
import './sass/manufacture.scss'

const Cabinet =  () => {

    const[active, setActive] = useState('profile');
    const navigate = useNavigate();

    
    const setActiveElement = (state) => {
        if(active === state) {
            return 'personal__menu-item personal__menu-item_active'
         }else{return 'personal__menu-item'}
    }

    return(
        <>
            <div className="personal">
                <div className="container">
                    <div className="personal__menu">
                            <div onClick={()=>{setActive('profile'); navigate('/personal')}} className={setActiveElement('profile')}>
                            <img src="../icons/profile.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Профиль</div>
                        </div>
                            <div onClick={()=>{setActive('new'); navigate('/personal/neworder')}} className={setActiveElement('new')}>
                            <img src="../icons/new_order.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Новый заказ</div>
                        </div>
                            <div onClick={()=>{setActive('manufacture'); navigate('/personal/manufacture')}} className={setActiveElement('manufacture')}>
                            <img src="../icons/in_work.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Заказы в работе</div>
                        </div>
                            <div onClick={()=>{setActive('history'); navigate('/personal/history')}} className={setActiveElement('history')}>
                            <img src="../icons/archive.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">История заказов</div>
                        </div>
                            <div onClick={()=>{setActive('help'); navigate('/personal/help')}} className={setActiveElement('help')}>
                            <img src="../icons/help.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Помощь</div>
                        </div>
                            <div onClick={()=>{setActive('review'); navigate('/personal/review')}} className={setActiveElement('review')}>
                            <img src="../icons/review.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Оставить отзыв</div>
                        </div>
                            <div onClick={()=>{setActive('settings'); navigate('/personal/settings')}} className={setActiveElement('settings')}>
                            <img src="../icons/settings.png" alt="" className="personal__item-pic"/>
                            <div className="personal__item-title">Настройки</div>
                        </div>
                    </div>
                    <div className="personal__line"></div>
                </div>
                
            </div>

            <Outlet/>

            
           
        </>
    )
}

export default Cabinet;