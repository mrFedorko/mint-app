import { configureStore } from "@reduxjs/toolkit";
import signReducer from './signSlice'
import uvprintReducer from './uvprintSlice'
import authReducer from './authSlice'



const store = configureStore({
    reducer: {
        sign: signReducer,
        uvprint: uvprintReducer,
        auth: authReducer

    }
})

export default store