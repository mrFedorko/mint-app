import React from 'react';

import ContentRouter from '../bloc/contentRouter/contentRouter';
import Menu from '../bloc/menu/menu';
// import Loading from "../bloc/loading/loading";

import { ServerMessage } from '../bloc/serverMessage/serverMessage';




const App  =  () =>  {
    


    return(
        <>
            <Menu/>
            <ContentRouter/>
            <ServerMessage/>
        </>
    );
};

export default App;
