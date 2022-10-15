import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react"
import { useSettings } from "./settings.hook";

const storageName = 'userdata';


export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const {getRequest} = useSettings()

    const login = useCallback((jwt, id)=> {
        setToken(jwt);
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwt}))
        getRequest(`http://localhost:8000/api/user/${id}`)
    }, [getRequest])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName);
        setToken(null);
        setUserId(null)
        
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.userId)

        }
    }, [login])

    return {  login, logout, token, userId }

}