import { createContext } from "react";

function noop() {};

export const AuthContext = createContext({
    token: null,
    id: null,
    login: noop,
    logout: noop,
    isAuth: false,
    loading: false
})