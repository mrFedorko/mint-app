import React from 'react';
import { useSelector } from 'react-redux';


import AuthPage from '../authPage/authPage';

import Cabinet from './cabinet';

export const PersonalEnter = () => {
    const {isAuth} = useSelector(state => state.auth);
    if (isAuth){
        return   <Cabinet/>;
    }
    return <AuthPage/>;
};