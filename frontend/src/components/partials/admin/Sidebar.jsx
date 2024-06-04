import { BookOutlined, DashboardOutlined, UserOutlined, SwapOutlined, SignatureOutlined, ProductOutlined, FileOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [collapse, setCollapse] = useState(false);

    const items = [
        {
            key: 'swap',
            label: 'Thu nhỏ',
            icon: <SwapOutlined />,
            onClick: () => setCollapse(!collapse),
        },
        {
            type: 'divider'
        },
        {
            key: 'dashboard',
            label: <Link to="/admin/dashboard">Bảng điều khiển</Link>,
            icon: <DashboardOutlined />
        },
        {
            key: 'user',
            label: <Link to="/admin/user">Tài khoản</Link>,
            icon: <UserOutlined />
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
            key: 'blog',
            label: <Link to="/admin/blog">Bài viết</Link>,
            icon: <SignatureOutlined />
        },
        {
            type: 'divider'
        },
        {
            key: 'file',
            label: <Link to="/admin/file">Quản lý tệp tin</Link>,
            icon: <FileOutlined />
        },
    ];

    return (
        <div>
            <Menu
                style={{
                    borderRight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
                defaultSelectedKeys={['dashboard']}
                mode="inline"
                items={items}
                className='pt-10 h-full px-4'
                inlineCollapsed={collapse}
            />
        </div>
    );
};
export default Sidebar;