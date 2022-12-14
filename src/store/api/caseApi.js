import { api } from "./api";



export const caseApi = api.injectEndpoints({
    endpoints: builder => ({
        getAllCases: builder.query({
            query: () => ({
                url: `/api/cases/getall`,
            }),
        }),
    }),
});

export const { useGetAllCasesQuery } = caseApi;
