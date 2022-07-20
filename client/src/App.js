import "antd/dist/antd.css";
import {Layout} from 'antd';
import {useState} from "react";
import {SideNavbar} from "./components/SideNavbar/SideNavbar.js";
import {ChatBox} from "./components/ChatBox/ChatBox.js";
import { Routes, Route, Navigate } from 'react-router-dom';
import Rooms from "./components/Rooms/Rooms.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";

function App() {
    return (
        <Layout style={{minHeight: '100vh'}} hasSider>
            <SideNavbar/>
            <Layout className="site-layout">
                <Routes>
                    <Route path='/chat' element={<ChatBox/>}/>
                    <Route path='/rooms' element={<Rooms/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </Layout>
        </Layout>
    )
}

export default App;
