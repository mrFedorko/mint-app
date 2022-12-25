import { api } from "./api";

export const uploadApi = api.injectEndpoints({
    endpoints: builder => ({
        upload: builder.mutation({
            query: ({id, orderDate, formData}) => ({
                url: `/api/upload/${id}/${orderDate}`,
                method: 'PATCH',
                body: formData,
            }),
            
        }),
       
    }),
});

export const { useUploadMutation } = uploadApi;
