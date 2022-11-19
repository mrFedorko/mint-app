import c from '../../config.json'

const wsServer = c.wsUrl;

export const wsConnection = new WebSocket(wsServer);