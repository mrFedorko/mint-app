import { createSlice } from '@reduxjs/toolkit';


const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: {
        name: '',
        phone: '',
        adress : '',
        entity: '',
        entityName: '',
        TIN: '',
        OGRN: '',
        check: '',
        corCheck: '',
        bank: '',
        BIK: '',
        
    },
    reducers: {
        BIKCh: (state, action) => {state.BIK = action.payload},
        nameCh: (state, action) => {state.name = action.payload}, 
        phoneCh : (state, action) => {state.phone = action.payload;},
        adressCh: (state, action) =>{state.adress = action.payload;},
        organizationCh: (state, action) =>{state.organization = action.payload;},
        entityCh: (state, action) => {state.entity = action.payload;} ,
        entityNameCh: (state, action) => {state.entityName = action.payload;} ,
        TINCh: (state, action) => {state.TIN = action.payload;} ,
        OGRNCh: (state, action) => {state.OGRN = action.payload;} ,
        checkCh: (state, action) => {state.check = action.payload;} ,
        corCheckCh: (state, action) => {state.corCheck = action.payload;} ,
        bankCh: (state, action) => {state.bank = action.payload;} ,

        settingsCh: (state,action) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.adress = action.payload.adress;
            state.entity = action.payload.entity;
            state.entityName = action.payload.entityName;
            state.TIN = action.payload.TIN;
            state.OGRN = action.payload.OGRN;
            state.check = action.payload.check;
            state.corCheck = action.payload.corCheck
            state.bank = action.payload.bank;
            state.BIK = action.payload.BIK;
        },
   
    },
});
export const {nameCh, phoneCh, adressCh, BIKCh, bankCh, corCheckCh, checkCh, OGRNCh, TINCh, entityNameCh, entityCh} = userSettingsSlice.actions;

export const {settingsCh} = userSettingsSlice.actions;

export default userSettingsSlice.reducer;