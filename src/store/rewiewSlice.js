import { createSlice } from '@reduxjs/toolkit';


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        text: '',
        rate: 0,
        date: '',
        order: '',
        img: '',
        anonim: false,
        
    },
    reducers: {
        textCh: (state, action) => {state.text = action.payload},
        rateCh: (state, action) => {state.rate = action.payload}, 
        dateCh : (state, action) => {state.date = action.payload;},
        orderCh: (state, action) =>{state.order = action.payload;},
        imgCh: (state, action) =>{state.organization = action.payload;},
        anonimCh: (state, action) => {state.anonim = action.payload;} ,

        resetReview: (state) => {
            state.anonim = false;
            state.text = '';
            state.date = '';
            state.order = '';
            state.rate = null;
            state.img = '';
        } 
   
    },
});
export const { textCh, anonimCh, dateCh, imgCh, orderCh, rateCh, resetReview } = reviewSlice.actions;


export default reviewSlice.reducer;