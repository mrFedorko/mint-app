import { configureStore } from '@reduxjs/toolkit';

import signReducer from './signSlice';
import uvprintReducer from './uvprintSlice';
import authReducer from './authSlice';
import userSettingsReducer from './userSettingsSlice';
import orderReducer from './orderSlice';
import polygraphyReducer from './polygraphySlice';
import sMessageReducer from './sMessageSlice'
import reviewReducer from './rewiewSlice'

import { api } from './api/api';

const store = configureStore({
    reducer: {
        sign: signReducer,
        uvprint: uvprintReducer,
        auth: authReducer,
        userSettings: userSettingsReducer,
        order: orderReducer,
        polygraphy: polygraphyReducer,
        sMessage: sMessageReducer,
        review: reviewReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(api.middleware)
    },
    devTools: true,
});

export default store;