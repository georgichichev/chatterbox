import "antd/dist/antd.css";
import {Layout} from 'antd';
import {useState} from "react";
import {SideNavbar} from "./components/SideNavbar/SideNavbar.js";
import {ChatBox} from "./components/ChatBox/ChatBox.js";
import { Routes, Route, Navigate } from 'react-router-dom';
import Rooms from "./components/Rooms/Rooms.js";

function App() {
    return (
        <Layout style={{minHeight: '100vh'}} hasSider>
            <SideNavbar/>
            <Layout className="site-layout">
                <Routes>
                    <Route path='/chat' element={<ChatBox/>}/>
                    <Route path='/rooms' element={<Rooms/>}/>
                </Routes>
            </Layout>
        </Layout>
    )
}

export default App;
