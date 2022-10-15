import React, { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

import Cabinet from './cabinet';
import AuthPage from '../../authPage/authPage';

export const Personal = () => {
    const {isAuth} = useContext(AuthContext)
    if (isAuth){
    return   <Cabinet/>
    }
    return <AuthPage/>
}