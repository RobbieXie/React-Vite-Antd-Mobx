import React from "react";
import { Link } from "react-router-dom"
import { Menu } from 'antd'
import { Header } from "antd/lib/layout/layout";
import { useLocation } from "react-router-dom"

function MyBreadcrumb () {
    // 获取当前route location
    let location = useLocation();

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/index"><Link to="/index">主页</Link></Menu.Item>
                <Menu.Item key="/student"><Link to="/student">学生成绩管理</Link></Menu.Item>
            </Menu>
        </Header> 
    )
}

export default MyBreadcrumb;