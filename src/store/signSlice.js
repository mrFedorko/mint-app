import { createSlice } from '@reduxjs/toolkit';

const signSlice = createSlice({
    name: 'sign',
    initialState: {
        calculator: {
            main: 'sign',
            signType: '',
            type: '',
            light:'',
            colored: '',
            sideColor: '',
            faceColor: '',
            word: '',
            size: '',
            width : '',
            height: '',
            signMaterial: '',
            bannerPostWork: '', 
        },
    },
    reducers: {
        signTypeCh : (state, action) => {state.calculator.signType = action.payload;},
        typeCh: (state, action) =>{state.calculator.type = action.payload;},
        lightCh: (state, action) =>{state.calculator.light = action.payload;},
        coloredCh: (state, action) =>{state.calculator.colored = action.payload;},
        sideColorCh: (state, action) =>{state.calculator.sideColor = action.payload;},
        faceColorCh: (state, action) =>{state.calculator.faceColor = action.payload;},
        wordCh: (state, action) =>{state.calculator.word = action.payload;},
        sizeCh: (state, action) =>{state.calculator.size = action.payload;},
        widthCh: (state, action) =>{state.calculator.width = action.payload;},
        heightCh: (state, action) =>{state.calculator.height = action.payload;},
        signMaterialCh: (state, action) =>{state.calculator.signMaterial = action.payload;},
        bannerPostWorkCh: (state, action) =>{state.calculator.bannerPostWork = action.payload;},

        resetSign: (state) => {
            state.calculator.main = 'sign';
            state.calculator.signType = '';
            state.calculator.type = '';
            state.calculator.light ='';
            state.calculator.colored = '';
            state.calculator.sideColor = '';
            state.calculator.faceColor = '';
            state.calculator.word = '';
            state.calculator.size = '';
            state.calculator.width  = '';
            state.calculator.height = '';
            state.calculator.signMaterial = '';
            state.calculator.bannerPostWork = '';
        }
      
    },
});

export const { signTypeCh, typeCh, lightCh, coloredCh, sideColorCh, faceColorCh, wordCh, sizeCh, widthCh, heightCh, signMaterialCh, bannerPostWorkCh, resetSign} = signSlice.actions;

export default signSlice.reducer;