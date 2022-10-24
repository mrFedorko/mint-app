import React, { useContext } from 'react';

import { AuthContext } from '../../../context/auth.context';

import AuthPage from '../../authPage/authPage';

import Cabinet from './cabinet';

export const Personal = () => {
    const {isAuth} = useContext(AuthContext);
    if (isAuth){
        return   <Cabinet/>;
    }
    return <AuthPage/>;
};