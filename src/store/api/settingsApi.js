import { api } from "./api";
import { settingsCh } from "../userSettingsSlice";



export const settingsApi = api.injectEndpoints({
    endpoints: builder => ({
        getSettings: builder.query({
            query: (id) => ({
                url: `/settings/get/${id}`,
            }),
            async onQueryStarted (_, {dispatch, queryFulfilled}){
                try {
                    const data = (await queryFulfilled).data;
                    dispatch(settingsCh(data))
                    console.log(data)

                } catch (error) {
                    console.error(error, ' couldnt fetch userdata')
                }
            }
        }),
        setSettings: builder.mutation({
            query: (user) => ({
               url: `/settings/set/${user.id}`,
               method: 'POST',
               body: user.settings,
            }),
            async onQueryStarted (args, {dispatch, queryFulfilled}){
                try {
                    console.log(args)
                } catch (error) {
                    console.error(error, ' couldnt fetch userdata')
                }
            }
        })
    }),
});

export const { useGetSettingsQuery, useSetSettingsMutation } = settingsApi
