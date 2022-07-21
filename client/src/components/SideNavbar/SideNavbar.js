import {Menu} from "antd";
import Sider from "antd/es/layout/Sider.js";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const items = [
    {label: 'Rooms', key: '/rooms'},
    {label: 'Create room', key: '/rooms/create'},
    {label: 'Chat', key: '/chat'},
    {label: 'Login', key: '/login'},
    {label: 'Register', key: '/register'},
];


export const SideNavbar = () => {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(true);
    const [selected, setSelected] = useState('');

    useEffect(() =>{
        setSelected(window.location.pathname)
    },[window.location.pathname])

    const onClick = (e) => {
        navigate(e.key)
    }

    return (
        <Sider breakpoint={"lg"} onBreakpoint={() => setCollapsed(true)} collapsible collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}>
            <Menu
                onClick={onClick}
                selectedKeys={[selected]}
                mode="inline"
                theme="dark"
                items={items}
            />
        </Sider>
    )
}