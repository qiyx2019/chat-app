import io from '@hyoga/uni-socket.io';

// const URL = "http://172.19.8.13:3001";
import {$baseUrl} from './index'
const socket = io($baseUrl, { 
 transports: [ 'websocket', 'polling' ],
 timeout: 5000,
 autoConnect:false
});
socket.onAny((event:Event, ...args:any):any => {
  console.log(event, args);
});

export default socket;