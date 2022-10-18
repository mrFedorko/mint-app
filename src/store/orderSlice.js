import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orName: '',
        orType: '',
        orDetails: {},
        orQuan: '',
        orComment: '',
        orStatus: 'notCreated',
        orExpDate: '',
        orLayout: '',
        orDelivery: ''
    },
    reducers: {
        orNameCh: (state, action) => {state.orName = action.payload},
        orTypeCh: (state, action) => {state.orType = action.payload},
        orDetailsCh: (state, action) => {state.orDetails = action.payload},
        orQuanCh: (state, action) => {state.orQuan = action.payload},
        orCommentCh: (state, action) => {state.orComment = action.payload},
        orStatusCh: (state, action) => {state.orStatus = action.payload},
        orExpDateCh: (state, action) => {state.orExpDate = action.payload},
        orLayoutCh: (state, action) => {state.orLayout = action.payload},
        orDeliveryCh: (state, action) => {state.orDelivery = action.payload},
    }
})

export const {orNameCh, orTypeCh, orStatusCh, orCommentCh, orDeliveryCh, orDetailsCh, orExpDateCh, orLayoutCh, orQuanCh} = orderSlice.actions;

export default orderSlice.reducer