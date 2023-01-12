import { api } from "./api";



export const reviewApi = api.injectEndpoints({
    endpoints: builder => ({
        getAllReviews: builder.query({
            query: () => ({
                url: `/api/review/getAll`,
            }),
            providesTags: ['Review']
        }),

        getMyReviews: builder.query({
            query: (id) => ({
               url:`/api/review/getMy/${id}`,
            }),
            providesTags: ['Review']
        }),
        
        getOneReview: builder.query({
            query: ({id, target}) => ({
                url:`/api/review/getOne/${id}/${target}`,
            }),
        }),

        sendReview: builder.mutation({
            query: ({id, body}) => ({
                url:`/api/review/sendReview/${id}`,
                body,
                method: 'POST' 
                })
            ,
            invalidatesTags: ['Review']
        }),

        changeReview: builder.mutation({
            query: ({id, target, body}) => ({
                url:`/api/review/change/${id}/${target}`,
                body,
                method: 'POST' 
                })
            ,
            invalidatesTags: ['Review']
        }),
    }),
});

export const { useGetAllReviewsQuery, useGetMyReviewsQuery, useGetOneReviewQuery, useSendReviewMutation, useChangeReviewMutation } = reviewApi;
