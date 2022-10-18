import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nameCh,  phoneCh, adressCh, BIKCh, bankCh, corCheckCh, checkCh, OGRNCh, TINCh, entityNameCh, entityCh } from "../../../store/userSettingsSlice";
import { useSettings } from '../../../hooks/settings.hook';
import { useRequest } from '../../../hooks/request.hook';





const Settings = () => {
    
    const dispatch = useDispatch();
    const {name, adress, phone,  entity, entityName, TIN, OGRN, check, corCheck, bank, BIK} = useSelector(state => state.userSettings);
   
    const { getId } = useSettings();
    const request = useRequest();

    const settingsSaveHandler = async () => {
        const id = getId();
        ;
        await request(`http://localhost:8000/api/user/set/${id}`, 'POST', {name, adress, phone,  entity, entityName, TIN, OGRN, check, corCheck, bank, BIK})
    }
    
    return ( 
        <div className='container'>
            <div className="calculator__group m-5">
                <div className="calculator__input">
                <input value={name} onChange={(e) => dispatch(nameCh(e.target.value))} type="text" className="form-control"  placeholder="Ваше имя"/>
                <div class="input-group mb-3 mt-3">
                    <label class="input-group-text w-40" htmlFor="inputGroupSelect01">Тип организации</label>
                    <select value={entity} onChange={(e) =>  dispatch(entityCh(e.target.value))} class="form-select" id="">
                        <option defaultValue=""/>
                        <option value="ООО">ООО</option>
                        <option value="ИП">ИП</option>
                        <option value="АО">АО</option>
                    </select>
                </div>
                <input value={entityName} onChange={(e) => dispatch(entityNameCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="наименование организации"/>
                <input value={TIN} onChange={(e) => dispatch(TINCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="ИНН"/>
                <input value={OGRN} onChange={(e) => dispatch(OGRNCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="ОГРН"/>
                <input value={check} onChange={(e) => dispatch(checkCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="Расчетный счет"/>
                <input value={corCheck} onChange={(e) => dispatch(corCheckCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="Корр. счет"/>
                <input value={bank} onChange={(e) => dispatch(bankCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="Банк"/>
                <input value={BIK} onChange={(e) => dispatch(BIKCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="БИК банка"/>
                <input value={adress} onChange={(e) => dispatch(adressCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="Адрес"/>
                <input value={phone} onChange={(e) => dispatch(phoneCh(e.target.value))} type="text" className="form-control mt-3"  placeholder="Телефон"/>

                <button onClick={settingsSaveHandler} className='btn btn-success mt-3'>Сохранить изменения</button>
                    
                </div>
            </div>
        </div>
     );
}

export default Settings ;