import {
    BookOutlined,
    ControlOutlined,
    DashboardOutlined,
    FileOutlined,
    NotificationOutlined,
    ProductOutlined,
    SignatureOutlined,
    TeamOutlined,
    MoneyCollectOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {

    const items = [
        {
            key: 'dashboard',
            label: <Link to="/admin/dashboard">Bảng điều khiển</Link>,
            icon: <DashboardOutlined />
        },
        {
            key: 'user',
            label: <Link to="/admin/user">Tài khoản</Link>,
            icon: <TeamOutlined />
        },
        {
            key: 'category',
            label: <Link to="/admin/category">Danh mục</Link>,
            icon: <ProductOutlined />
        },
        {
            key: 'course',
            label: <Link to="/admin/course">Khoá học</Link>,
            icon: <BookOutlined />
        },
        {
            key: 'post',
            label: <Link to="/admin/post">Bài viết</Link>,
            icon: <SignatureOutlined />
        },
        {
            key: 'invoice',
            label: <Link to="/admin/invoice">Hoá đơn</Link>,
            icon: <MoneyCollectOutlined />
        },
        {
            type: 'divider'
        },
        {
            key: 'news',
            label: <Link to="/admin/news">Tin tức</Link>,
            icon: <NotificationOutlined />
        },
        {
            key: 'file',
            label: <Link to="/admin/file">Quản lý tệp tin</Link>,
            icon: <FileOutlined />
        },
        {
            key: 'other',
            label: <Link to="/admin/custom">Tuỳ chỉnh</Link>,
            icon: <ControlOutlined />
        },
    ];

    return (
        <div>
            <Menu
                style={{
                    borderRight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                }}
                defaultSelectedKeys={['dashboard']}
                mode="inline"
                items={items}
                className='pt-10 h-full px-4'
                inlineCollapsed={isCollapsed}
            />
        </div>


    );
};
export default Sidebar;