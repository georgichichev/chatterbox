import {io} from "socket.io-client";
import React from 'react';

export const socket = io('http://localhost:3000', {autoConnect: false});
export const SocketContext = React.createContext();
