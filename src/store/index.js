import { configureStore } from "@reduxjs/toolkit";
import signReducer from './signSlicer'



const store = configureStore({
    reducer: {
        sign: signReducer
    }
})

export default store