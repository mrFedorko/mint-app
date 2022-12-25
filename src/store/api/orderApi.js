import { orReset } from "../orderSlice";
import { api } from "./api";


export const newOrderApi = api.injectEndpoints({
    endpoints: builder => ({
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: `/api/order/create`,
                method: 'POST',
                body: orderData,
            }),
            invalidatesTags: ['Order'],
            async onQueryStarted (_, {dispatch}){
                try {
                    dispatch(orReset());
                } catch (error) {
                    console.error(error, ' couldnt reset orderState')
                }
            }
        }),
        getAllOrders: builder.query({
            query: (userId) => ({
                url: `/api/order/getall/${userId}`,
            }),
            providesTags: ['Order'],
        }),
        changeOrder: builder.mutation({

        }),
        
    }),
});

export const { useCreateOrderMutation, useGetAllOrdersQuery } = newOrderApi;
