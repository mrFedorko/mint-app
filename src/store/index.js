import { configureStore } from "@reduxjs/toolkit";
import signReducer from './signSlice'
import uvprintReducer from './uvprintSlice'
import authReducer from './authSlice'
import userSettingsReducer from './userSettingsSlice'
import orderReducer from './orderSlice'


const store = configureStore({
    reducer: {
        sign: signReducer,
        uvprint: uvprintReducer,
        auth: authReducer,
        userSettings: userSettingsReducer,
        order: orderReducer

    }
})

export default store