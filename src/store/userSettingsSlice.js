import { createSlice } from "@reduxjs/toolkit";



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
      nameCh: (state, action) => {state.name = action.payload },
      phoneCh : (state, action) => {state.phone = action.payload},
      adressCh: (state, action) =>{state.adress = action.payload},
      organizationCh: (state, action) =>{state.organization = action.payload},
      entityCh: (state, action) => {state.entity = action.payload} ,
      entityNameCh: (state, action) => {state.entityName = action.payload} ,
      TINCh: (state, action) => {state.TIN = action.payload} ,
      OGRNCh: (state, action) => {state.OGRN = action.payload} ,
      checkCh: (state, action) => {state.check = action.payload} ,
      corCheckCh: (state, action) => {state.corCheck = action.payload} ,
      bankCh: (state, action) => {state.bank = action.payload} ,
      BIKCh: (state, action) => {state.BIK = action.payload} ,
    }
  })

  export const {nameCh, phoneCh, adressCh, organizationCh, BIKCh, bankCh, corCheckCh, checkCh, OGRNCh, TINCh, entityNameCh, entityCh} = userSettingsSlice.actions;

  export default userSettingsSlice.reducer;