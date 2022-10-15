import { useCallback } from "react";

export const useRequest = () => {
    const request = useCallback(async (url, method = 'GET', body =null, headers = {'Content-Type': 'application/json'}) =>{
        // dispatch(loadingCh(true));

        try {
            
            const response = await fetch(url, {
                method,
                body: JSON.stringify(body),
                headers
            });
            const data = response.json();

            if(!response.ok){
                throw new Error(data.message || `could not fetch ${url}`)
            }

            return data

        } catch (error) {
            
        }

    }, [] )

    return request
}