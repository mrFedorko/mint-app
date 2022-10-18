import { configureStore } from "@reduxjs/toolkit";
import signReducer from './signSlice'
import uvprintReducer from './uvprintSlice'
import authReducer from './authSlice'
import userSettingsReducer from './userSettingsSlice'
import orderReducer from './orderSlice'
import polygraphyReducer from './polygraphySlice'

const store = configureStore({
    reducer: {
        sign: signReducer,
        uvprint: uvprintReducer,
        auth: authReducer,
        userSettings: userSettingsReducer,
        order: orderReducer,
        polygraphy: polygraphyReducer

    }
})

export default store