import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orName: '',
        orType: '',
        orDetails: {},
        orQuan: '1',
        orComment: 'you can add comment',
        orStatus: 'notCreated',
        orDate: '',
        orOwner: '',
        orExpDate: '',
        orLayout: [],
        orPrice: 0,
        orDelivery: {
            type: '',
            town:'',
            adress: '',
            comment:'',
        },
        orReceiver:{  
            name: '',
            phone:'',     
        }
    },
    reducers: {
        orNameCh: (state, action) => {state.orName = action.payload;},
        orTypeCh: (state, action) => {state.orType = action.payload;},
        orDetailsCh: (state, action) => {state.orDetails = action.payload;},
        orQuanCh: (state, action) => {state.orQuan = action.payload;},
        orCommentCh: (state, action) => {state.orComment = action.payload;},
        orStatusCh: (state, action) => {state.orStatus = action.payload;},
        orExpDateCh: (state, action) => {state.orExpDate = action.payload;},
        orLayoutCh: (state, action) => {state.orLayout.push(action.payload);},
        orDeliveryTypeCh: (state, action) => {state.orDelivery.type = action.payload;},
        orDeliveryTownCh: (state, action) => {state.orDelivery.town = action.payload;},
        orDeliveryCommentCh: (state, action) => {state.orDelivery.comment = action.payload;},
        orDeliveryAdressCh: (state, action) => {state.orDelivery.adress = action.payload;},
        orReceiverNameCh: (state, action) => {state.orReceiver.name = action.payload;},
        orReceiverPhoneCh: (state, action) => {state.orReceiver.phone = action.payload;},
        orPriceCh: (state, action) => {state.orPrice = action.payload;}, 

        orReset: (state) => {
           state.orName = '';
           state.orType = '';
           state.orDetails = {};
           state.orQuan = '1';
           state.orComment = 'you can add comment';
           state.orStatus = 'notCreated';
           state.orDate = '';
           state.orOwner = '';
           state.orExpDate = '';
           state.orLayout = [];
           state.orPrice = '';
           state.orDelivery.type = '';
           state.orDelivery.town = '';
           state.orDelivery.adress = '';
           state.orDelivery.comment = ''; 
           state.orReceiver.name = '';
           state.orReceiver.phone = '';
        }
    },
});

export const {
    orNameCh, 
    orTypeCh, 
    orStatusCh, 
    orCommentCh, 
    orDeliveryTypeCh, 
    orDeliveryAdressCh, 
    orDeliveryDestinationCh, 
    orDeliveryTownCh, 
    orDeliveryCommentCh,
    orReceiverNameCh,
    orReceiverPhoneCh,
    orDetailsCh, 
    orExpDateCh, 
    orLayoutCh, 
    orQuanCh,
    orPriceCh,
    orReset} = orderSlice.actions;

export default orderSlice.reducer;