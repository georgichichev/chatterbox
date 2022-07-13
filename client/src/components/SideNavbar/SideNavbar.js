import {Menu} from "antd";
import Sider from "antd/es/layout/Sider.js";
import {useState} from "react";
import {UsergroupAddOutlined} from "@ant-design/icons";

const items = [
    {label: 'Rooms', key: 'item-1', icon: <UsergroupAddOutlined />},
    {label: 'Create Room', key: 'item-2'},
    {label: 'Private Message', key: 'item-3'},

];

export const SideNavbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider breakpoint={"lg"} onBreakpoint={() => setCollapsed(true)} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo"/>
            <Menu style={{fontSize: '17px'}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            <div className="logo"/>
        </Sider>
    )
}