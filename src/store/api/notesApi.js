import { api } from "./api";



export const notesApi = api.injectEndpoints({
    endpoints: builder => ({
        getNotes: builder.query({
            query: (id) => ({
                url: `/api/notes/get/${id}`,
            }),
        }),
    }),
});

export const { useGetNotesQuery } = notesApi;
