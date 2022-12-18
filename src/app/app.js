import React from 'react';

import ContentRouter from '../bloc/contentRouter/contentRouter';
import Menu from '../bloc/menu/menu';
import Footer from '../bloc/footer/footer';
// import Loading from "../bloc/loading/loading";

import { ServerMessage } from '../bloc/serverMessage/serverMessage';

import './app.scss'


const App  =  () =>  {
    console.log('app rendered')
    return(
        <>
        <div className="wrap">
            <Menu/>
            <ContentRouter/>
            <ServerMessage/>
            <Footer/>    
        </div>

        </>


    );
};

export default App;
