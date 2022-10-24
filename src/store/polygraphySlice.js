import { createSlice } from '@reduxjs/toolkit';

const polygraphySlice = createSlice({
    name: 'polygraphy',
    initialState: {
        
        productType: '',
        density: '',
        quan:'',
        size: '',

        
    },
    reducers: {
        productTypeCh : (state, action) => {state.productType = action.payload;},
        densityCh: (state, action) =>{state.density = action.payload;},
        quanCh: (state, action) =>{state.quan = action.payload;},
        sizeCh: (state, action) =>{state.size = action.payload;},
      
    },
});

export const { productTypeCh, densityCh, quanCh, sizeCh } = polygraphySlice.actions;

export default polygraphySlice.reducer;