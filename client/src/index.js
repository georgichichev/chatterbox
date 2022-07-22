import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SocketContext, socket} from "./contexts/socketContext.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SocketContext.Provider value={socket}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SocketContext.Provider>
);
