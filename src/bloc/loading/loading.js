import React, { useEffect } from 'react';

import './loading.scss';

export const LoadingPage = (props) => {
    const style = {
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: '1',
    };
    


    return(
        <div className="loading__wrapper" style={style}>
            <div class="loadingio-spinner-bars-541dk3owok8"><div class="ldio-lb7nv43zlt">
            <div></div><div></div><div></div><div></div>
            </div></div>
            
        </div>

    );
};

