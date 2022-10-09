import { useEffect } from "react";
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadingCh, errorsPush, errorsReset, tokenCh, userIdCh, authCh, reset  } from "../store/authSlice"

const storageName = 'userdata';


export const useAuth = () => {
    const state = useSelector(state=> state.auth)
    const dispatch = useDispatch()

    const request = useCallback(async (url, method = 'GET', body ='null', headers = {'Content-Type': 'application/json'}) =>{
        dispatch(loadingCh(true));

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

            dispatch(loadingCh(false));
            return data

        } catch (error) {
            dispatch(loadingCh(false))
            dispatch(errorsPush(error.message))
        }

    }, [dispatch] )

    const login = useCallback((jwt, id)=> {
        dispatch(tokenCh(jwt));
        dispatch(userIdCh(id));

        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwt}))
    }, [dispatch])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName);
        dispatch(reset());
        console.log(state)

    }, [dispatch]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.userId)
            dispatch(authCh(true))
        }
    }, [login, dispatch])

    return { request, errorsReset, login, logout }

}