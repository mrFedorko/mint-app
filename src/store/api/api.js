import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, clearStore } from '../authSlice';
import c from '../../config.json'
import { sMessageCh } from '../sMessageSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: c.baseApiUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        const token = getState().auth.token;
        if (token){
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    console.log('args____', args);
    console.log('api____', api);
    console.log('extra____', extraOptions);

    let result = await baseQuery(args, api, extraOptions);
    
    if(result?.error?.status){
        result?.error?.status === "FETCH_ERROR" && api.dispatch(sMessageCh('Ошибка соединения с сервером'));
        console.log(result)
    }
    
    
    if(result?.data?.clientMessage){
        api.dispatch(sMessageCh(result.data.clientMessage))
    };
    if(result?.error?.data.clientMessage){
        api.dispatch(sMessageCh(result.error.data.clientMessage))
    };
    if(result?.error?.originalStatus === 401 || result?.error?.originalStatus === 403 ) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        if(refreshResult?.data) {
            const email = api.getState().auth.email;
            api.dispatch(setCredentials({...refreshResult.data, email}))
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(clearStore)
        }
    };
    
    return result;
        
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Order'],
    endpoints: builder => ({})
})