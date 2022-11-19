import { api } from "./api";

export const chatApi = api.injectEndpoints({
    endpoints: builder => ({
        getAllMessages: builder.query({
            query: (userId) => ({
                url: `/api/chat/getall/${userId}`,
            }),
            // async onQueryStarted(_,{dispatch}){
            //     console.log('fetching')
            // },
            providesTags: ['Order'],
        }),
    }),
});

export const { useGetAllMessagesQuery } = chatApi
