import { configureStore } from "@reduxjs/toolkit";
import signReducer from './signSlice'
import uvprintReducer from './uvprintSlice'



const store = configureStore({
    reducer: {
        sign: signReducer,
        uvprint: uvprintReducer

    }
})

export default store