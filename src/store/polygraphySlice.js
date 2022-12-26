import { createSlice } from '@reduxjs/toolkit';

const polygraphySlice = createSlice({
    name: 'polygraphy',
    initialState: {
        main: 'polygraphy',
        side: '',
        productType: '',
        descr: '',
        density: '',
        descrDensity: '',
        quan:'',
        descrQuan: '',
        size: '',
        descrSize: '',
        polygPrice:'',

        
    },
    reducers: {
        productTypeCh : (state, action) => {state.productType = action.payload;},
        densityCh: (state, action) =>{state.density = action.payload;},
        quanCh: (state, action) =>{state.quan = action.payload;},
        sizeCh: (state, action) =>{state.size = action.payload;},
        descrCh: (state, action) =>{state.descr = action.payload;},
        descrSizeCh: (state, action) =>{state.descrSize = action.payload;},
        descrQuanCh: (state, action) =>{state.descrQuan = action.payload;},
        descrDensityCh: (state, action) =>{state.descrDensity = action.payload;},
        polygPriceCh: (state, action) => {state.polygPrice = action.payload},
        polygSideCh: (state, action) => {state.side = action.payload},
        

        resetPolyg: (state) => {
           state.main= 'polygraphy';
           state.side= 'single';
           state.productType= '';
           state.descr= '';
           state.density= '';
           state.descrDensity= '';
           state.quan='';
           state.descrQuan= '';
           state.size= '';
           state.descrSize= '';
           state.polygPrice='';
        }
    },
});

export const { productTypeCh, densityCh, quanCh, sizeCh, descrCh, polygPriceCh, descrDensityCh, descrSizeCh, descrQuanCh, polygSideCh, resetPolyg } = polygraphySlice.actions;

export default polygraphySlice.reducer;