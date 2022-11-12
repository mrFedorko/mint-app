import { api } from './api.js'
import { io } from 'socket.io-client';
import c from '../../config.json'


const events = {
    sendMessage: 'sendMessage',
    getMessages: 'messages',
}


export const socketApi = api.injectEndpoints({
    endpoints: builder => ({
        sendMessage: builder.mutation({
            queryFn: (msg) => {
              const socket = io(c.baseApiUrl,{withCredentials: true});
              return new Promise(resolve => {
                socket.emit(events.sendMessage, msg, (message) => {
                  resolve({ data: message });
                });
              })
            },
          }),
        getMessages: builder.query({
            query: () => ({data:[]}),
            async onCacheEntryAdded(
                _, {cacheDataLoaded, cacheEntryRemoved, updateCachedData}
            ){
                try {
                    await cacheDataLoaded;
                    const socket = io(c.baseApiUrl,{withCredentials: true});

                    socket.on('connect', () => {
                        socket.emit(events.getMessages);
                    });

                    socket.on(events.sendMessage, (msg) =>{
                        updateCachedData((data) => {
                            data = [...data, msg]
                        } )
                    } );

                    await cacheEntryRemoved;
 
                    socket.off('connect');
                    socket.off(events.sendMessage);


                } catch (error) {
                    console.error(error)
                }
            }
        }),
    }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = socketApi;
