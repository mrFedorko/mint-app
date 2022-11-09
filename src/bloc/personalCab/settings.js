import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetSettingsQuery, useSetSettingsMutation } from '../../store/api/settingsApi';

import { nameCh,  phoneCh, adressCh, BIKCh, bankCh, corCheckCh, checkCh, OGRNCh, TINCh, entityNameCh, entityCh, settingsCh } from '../../store/userSettingsSlice';

import './sass/settings.scss';




const Settings = () => {
    console.log('render')
    const dispatch = useDispatch();
    const {userId} = useSelector(state=>state.auth);
    const {data} = useGetSettingsQuery(userId);

    const {name, adress, phone, entity, entityName, TIN, OGRN, check, corCheck, bank, BIK} = useSelector(state => state.userSettings);
    const settings = useSelector(state => state.userSettings);
    
    const[setSettings, {isLoading} ] = useSetSettingsMutation();

    const handleSaveSettings = async () => {
        await setSettings({id: userId, settings});
    };


    return ( 
        <div className="container">
            <div className="settings__group">
                <label className="settings__input_definition">Ваше имя</label>
                <input defaultValue={name} onChange={(e) => dispatch(nameCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите Ваше имя"/>
                <div class="settings__input_select">
                    <label className="settings__input_definition">Тип организации</label>
                    <select value={entity} onChange={(e) =>  dispatch(entityCh(e.target.value))} class="settings__form-control" id="">
                        <option defaultValue=""/>
                        <option value="ООО">ООО</option>
                        <option value="ИП">ИП</option>
                        <option value="АО">АО</option>
                    </select>
                </div>
                <label className="settings__input_definition">Наименование организации</label>
                <input defaultValue={entityName} onChange={(e) => dispatch(entityNameCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите наименование организации"/>
                <label className="settings__input_definition">ИНН</label>
                <input defaultValue={TIN} onChange={(e) => dispatch(TINCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите ИНН"/>
                <label className="settings__input_definition">ОГРН</label>
                <input defaultValue={OGRN} onChange={(e) => dispatch(OGRNCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите ОГРН"/>
                <label className="settings__input_definition">Расчетный счет</label>
                <input defaultValue={check} onChange={(e) => dispatch(checkCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите расчетный счет"/>
                <label className="settings__input_definition">Корр. счет</label>
                <input defaultValue={corCheck} onChange={(e) => dispatch(corCheckCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите корреспондентский счет"/>
                <label className="settings__input_definition">Банк</label>
                <input defaultValue={bank} onChange={(e) => dispatch(bankCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите название банка"/>
                <label className="settings__input_definition">БИК банка</label>
                <input defaultValue={BIK} onChange={(e) => dispatch(BIKCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите БИК банка"/>
                <label className="settings__input_definition">Адрес</label>
                <input defaultValue={adress} onChange={(e) => dispatch(adressCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введиет свой юридический адрес"/>
                <label className="settings__input_definition">Телефон</label>
                <input defaultValue={phone} onChange={(e) => dispatch(phoneCh(e.target.value))} type="text" className="settings__form-control"  placeholder="Введите номер телефона"/>

                <button onClick={handleSaveSettings} className="settings__btn">Сохранить изменения</button>
                    
            </div>
        </div>
    );
};

export default Settings ;