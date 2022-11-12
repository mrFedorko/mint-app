import React from 'react';
import { useSelector } from 'react-redux';
import { Notifications } from './notifications';



const Profile = ()=> {

    const {name, adress, phone,  entity, entityName, TIN, OGRN, check, corCheck, bank, BIK} = useSelector(state => state.userSettings);
    

    return(
        <div className="profile fadein">
            <div className="container">
                <div className="profile__info">
                    <div className="profile__info-inner">
                        <div className="profile__name">{name}</div>
                        <div className="profile__usersymbol">✔</div>
                        <div className="profile__status">профиль подтвержден</div>
                    </div>
                    <div className="profile__phone">{phone}</div>
                </div>
                <div className="profile__wrapper">
                    <div className="profile__col">
                        <div className="profile__block">
                            <div className="profile__block-heading">Реквизиты</div>
                            <div className="profile__block-content">
                                <div className="profile__content-icon"><img src="../icons/bag.png" alt=""/></div>
                                <div className="profile__content-text">
                                    {entity} {entityName} <br /> ИНН {TIN} <br /> {entity === 'ИП'  ? 'ОГРНИП' : 'ОГРН'} {OGRN} <br /> Р/с {check} <br /> 
                                    К/с {corCheck} <br /> Банк {bank} <br /> БИК {BIK} <br /> Адрес {adress}
                                </div>
                            </div>
                        </div>
                        <div className="profile__block">
                            <div className="profile__block-heading">Адрес доставки</div>
                            <div className="profile__block-content">
                                <div className="profile__content-icon"><img src="../icons/location.png" alt=""/></div>
                                <div className="profile__content-text">7382372, г. Белгород <br /> ул.Комара, стр.6</div>
                            </div>
                        </div>
                        <div className="profile__block">
                            <div className="profile__block-heading">Расходы</div>
                            <div className="profile__block-content">
                                <div className="profile__content-icon"><img src="../icons/coins.png" alt=""/></div>
                                <div className="profile__content-text">Общая сумма заказов: <br /> 3090 руб</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__messages">
                        <div className="profile__block-heading">
                            <div className="profile__block-title">Уведомления</div>
                            <div className="profile__sorting-wrap">envelope
                                <button href="/"className="profile__sorting"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg></button>
                                <button href="/"className="profile__sorting"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg></button>
                                <button href="/"className="profile__sorting"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
                                <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                </svg></button>
                            </div>
                        </div>
                        <div className="profile__messages-content">
                            <Notifications/>    
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;