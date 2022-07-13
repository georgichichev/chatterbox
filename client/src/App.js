import "antd/dist/antd.css";
import {Layout} from 'antd';
import {useState} from "react";
import {SideNavbar} from "./components/SideNavbar/SideNavbar.js";
import {ChatBox} from "./components/ChatBox/ChatBox.js";

function App() {
    return (
        <>
            <Layout style={{minHeight: '100vh'}} hasSider>
                <SideNavbar/>
                <Layout className="site-layout">
                    <div style={{margin: '24px 16px 0'}}>
                        <ChatBox/>
                    </div>
                </Layout>
            </Layout>
        </>
    )
}

export default App;
