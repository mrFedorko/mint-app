import { clearStore } from "../authSlice";
import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: {...credentials}
            }),
            
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout'
            }),
            async onQueryStarted (_, {dispatch, getState}){
                try {
                     await dispatch(clearStore());
                    (console.log(getState().auth))
                } catch (error) {
                    console.error(error, ' error during clear store')
                }
            }
        })

    }),
});

export const  { useLoginMutation, useLogoutMutation } =  authApi;
