import c from '../../config.json'
let wsServer = c.wsUrl;
if(c.mode === 'prod'){
    wsServer=c.wsUrl
}else{
    wsServer=c.wsLocal
}

export const wsConnection = new WebSocket(wsServer);