import React, {Component} from 'react';

import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';


import "./authPage.scss"


class AuthPage extends Component {

    state = {  }
    render() { 
        return (
            <>
                <LoginForm/>
                <RegisterForm/>
            </>
        );
    } 
}
 
export default AuthPage;