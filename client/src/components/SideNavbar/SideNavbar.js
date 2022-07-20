import {Menu} from "antd";
import Sider from "antd/es/layout/Sider.js";
import {useState} from "react";
import {UsergroupAddOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const SideNavbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider breakpoint={"lg"} onBreakpoint={() => setCollapsed(true)} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu style={{fontSize: '17px'}}
                  theme="dark"
                  defaultSelectedKeys={['1']}
                  mode="inline"
            >
                <Menu.Item key="Rooms">
                    <Link to='rooms'>
                        Rooms
                    </Link>
                </Menu.Item>
                <Menu.Item key="Chat">
                    <Link to='/chat'>
                        Chat
                    </Link>
                </Menu.Item>
                <Menu.Item key="Login">
                    <Link to='/login'>
                        Login
                    </Link>
                </Menu.Item>
                <Menu.Item key="Register">
                    <Link to='/register'>
                        Register
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    )
}