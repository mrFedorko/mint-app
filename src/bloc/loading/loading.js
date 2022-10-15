import React from 'react';

import './loading.scss'

const Loading = (props) => {
    const style = {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    };

    return(
        <div style={style}>

            <div className="loadingio-spinner-eclipse-5y7bbwtghr7"><div className="ldio-mn2uy3rxpen">
            <div></div>
            </div></div>

        </div>
    )
}

export default Loading;