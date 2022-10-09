import React from 'react';

const Profile = ()=> {
    return(
        <div className="profile">
        <div className="container">
            <div className="profile__info">
                <div className="profile__info-inner">
                    <div className="profile__name">Татьяна Комарова</div>
                    <div className="profile__usersymbol">✔</div>
                    <div className="profile__status">профиль подтвержден</div>
                </div>
                <div className="profile__phone">+79745378466</div>
            </div>
            <div className="profile__wrapper">
                <div className="profile__col">
                    <div className="profile__block">
                        <div className="profile__block-heading">Реквизиты</div>
                        <div className="profile__block-content">
                            <div className="profile__content-icon"><img src="icons/bag.png" alt=""/></div>
                            <div className="profile__content-text">
                                ИП Комарова Т.П. <br /> ИНН 746728346274 <br /> ОГРНИП 6473847347 <br /> Р/с 87356893493489374 <br /> БИК 734578347
                            </div>
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__block-heading">Адрес доставки</div>
                        <div className="profile__block-content">
                            <div className="profile__content-icon"><img src="icons/location.png" alt=""/></div>
                            <div className="profile__content-text">7382372, г. Белгород <br /> ул.Комара, стр.6</div>
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__block-heading">Расходы</div>
                        <div className="profile__block-content">
                            <div className="profile__content-icon"><img src="icons/coins.png" alt=""/></div>
                            <div className="profile__content-text">Общая сумма заказов: <br /> 3090 руб</div>
                        </div>
                    </div>
                </div>
                <div className="profile__masseges">
                <div className="profile__block-heading">Уведомления</div>
                </div>
            </div>
            

        </div>
    </div>
    )
}

export default Profile;