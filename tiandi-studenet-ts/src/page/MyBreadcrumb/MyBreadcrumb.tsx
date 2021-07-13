import React from "react";
import { useLocation } from "react-router-dom"
import { Breadcrumb } from 'antd'

function MyBreadcrumb () {
    // 获取当前route location
    let location = useLocation();

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>学生成绩管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>{location.pathname.slice(1)}</Breadcrumb.Item>
          </Breadcrumb>
    )
}

export default MyBreadcrumb;