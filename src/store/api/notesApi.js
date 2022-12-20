import { api } from "./api";



export const notesApi = api.injectEndpoints({
    endpoints: builder => ({
        getNotes: builder.query({
            query: (id) => ({
                url: `/api/notes/get/${id}`,
            }),
            providesTags: ['Note']
        }),

        noteLiked: builder.mutation({
            query: ({noteListId, target}) => ({
               url:`/api/notes/update/like/${noteListId}/${target}`,
               body: target,
               method: 'POST'
            }),
            invalidatesTags: ['Note']
        }),
        
        noteRecent: builder.mutation({
            query: ({noteListId, target}) => ({
                url:`/api/notes/update/recent/${noteListId}/${target}`,
                method: 'POST' 
                })
            ,
            invalidatesTags: ['Note']
        }),

        noteDeleted: builder.mutation({
            query: ({noteListId, target}) => ({
                url:`/api/notes/update/delete/${noteListId}/${target}`,
                method: 'POST' 
                })
            ,
            invalidatesTags: ['Note']
        }),
    }),
});

export const { useGetNotesQuery, useNoteDeletedMutation, useNoteRecentMutation, useNoteLikedMutation } = notesApi;
