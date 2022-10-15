import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { nameCh, phoneCh, adressCh, BIKCh, bankCh, corCheckCh, checkCh, OGRNCh, TINCh, entityNameCh, entityCh } from "../store/userSettingsSlice";



 export const useSettings = () => {
    
    const dispatch = useDispatch();

    const getId = () => {
        if(!localStorage.getItem('userdata')){
            return new Error('no user in localstorage')
        }
    
        const obj = JSON.parse(localStorage.getItem('userdata'));
        const id = obj.userId;
        return id
    }

    const getRequest = useCallback( async (url, method = 'GET', headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, headers})
            const settingsData = await response.json();
            
            const {name, adress, phone,  entity, entityName, TIN, OGRN, check, corCheck, bank, BIK} = settingsData.settings;
            dispatch(phoneCh(phone));
            dispatch(adressCh(adress));
            dispatch(entityCh(entity));
            dispatch(entityNameCh(entityName));
            dispatch(OGRNCh(OGRN));
            dispatch(checkCh(check));
            dispatch(corCheckCh(corCheck));
            dispatch(bankCh(bank));
            dispatch(BIKCh(BIK));
            dispatch(TINCh(TIN));
            dispatch(nameCh(name));
        } catch (error) {
            console.log(error)
        }
    }, [dispatch]
    );

    const setRequest = useCallback( async (url, method = 'POST', body = null,  headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body: JSON.stringify(body), headers})
            
            const data = response.json()
            console.log(data)

            if(!response.ok){
                throw new Error(data.message || `could not fetch ${url}`)
            }

        } catch (error) {
            console.log(error)
        }
    }, []
    );
    
    return {getRequest , getId, setRequest}

} 