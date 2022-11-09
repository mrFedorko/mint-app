import React from 'react';
import { useSelector } from 'react-redux';


import AuthPage from '../authPage/authPage';

import Cabinet from './cabinet';

export const Personal = () => {
    const {isAuth} = useSelector(state => state.auth);
    if ((isAuth.toString())=== 'true'){
        return   <Cabinet/>;
    }
    return <AuthPage/>;
};