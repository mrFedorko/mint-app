import { api } from "./api";



export const notesApi = api.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query({
            query: (id) => ({
                url: `/messages/chanel`,
            }),
        }),
    }),
});

export const { useGetMessagesQuery } = notesApi;
const ws = new WebSocket()