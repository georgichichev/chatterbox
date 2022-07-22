import 'antd/dist/antd.min.css'
import {Layout} from 'antd';
import {SideNavbar} from "./components/SideNavbar/SideNavbar.js";
import {ChatBox} from "./components/ChatBox/ChatBox.js";
import {Routes, Route} from 'react-router-dom';
import Rooms from "./components/Rooms/Rooms.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers.js";
import {useState} from "react";
import CreateRoom from "./components/Rooms/CreateRoom/CreateRoom.js";
import {RoomsContext} from "./contexts/roomsContext.js";

function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState('');

    const onUserClick = (e) => {
        setCurrentRoom(e.target.textContent);
    }

    return (
            <Layout style={{minHeight: '100vh'}} hasSider>
                <SideNavbar/>
                <Layout className="site-layout">
                    <RoomsContext.Provider value={{rooms, setRooms}}>
                        <Routes>
                            <Route path='/' element={<Login/>}/>
                            <Route path='/chat' element={<ChatBox currentRoom={currentRoom}/>}/>
                            <Route path='/rooms' element={<Rooms/>}/>
                            <Route path='/register' element={<Register/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/rooms/create' element={<CreateRoom/>}/>
                        </Routes>
                    </RoomsContext.Provider>
                </Layout>
                <ActiveUsers onUserClick={onUserClick}/>
            </Layout>
    )
}

export default App;
