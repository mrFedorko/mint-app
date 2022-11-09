import { clearStore } from "../authSlice";
import { sMessageCh } from "../sMessageSlice"
import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: {...credentials}
            }),
            async onQueryStarted (args, {dispatch, getState}){
                try {
                    console.log(args)
                } catch (error) {
                    dispatch(sMessageCh('Ошибка соединения с сервером'))
                }
            }
            
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout'
            }),
            async onQueryStarted (_, {dispatch, getState}){
                try {
                     await dispatch(clearStore());
                } catch (error) {
                    console.error(error, ' error during clear store')
                }
            }
        })

    }),
});

export const  { useLoginMutation, useLogoutMutation } =  authApi;
