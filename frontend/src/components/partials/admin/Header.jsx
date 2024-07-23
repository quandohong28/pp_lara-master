import {
    BellOutlined,
    LogoutOutlined,
    MenuOutlined, MessageOutlined,
    SearchOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { Avatar, Button, Dropdown } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.svg'


export default function Header({ onHandleCollapsed }) {
    const navigate = useNavigate();

    const admin = '/admin'
    const items = [
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: <Link to={admin + '/settings'}>Cài đặt</Link>,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            danger: true,
            label: <Link to='/'>Đăng xuất</Link>,
        },
    ];
    return (
        <div className='flex items-center justify-between px-10 py-5'>
            <div className='flex items-center gap-5'>
                <span>
                    <Button onClick={onHandleCollapsed} className='flex items-center' icon={<MenuOutlined />} />
                </span>
                <img
                onClick={() => navigate('/admin/dashboard')}
                src={logo}
                alt="laramaster"
                className='w-[160px] hover:cursor-pointer' />
            </div>
            <nav>
                <ul className='flex gap-5 items-center justify-end'>
                    <li key={'dashboard'}>
                        <Button
                            className='border-none'
                            icon={<SearchOutlined />}
                        />
                    </li>
                    <li key={'dashboard'}>
                        <Link to={admin + '/conversation'}><MessageOutlined /></Link>
                    </li>
                    <li key={'course'}>
                        <Link to={admin + '/notification'}><BellOutlined /></Link>
                    </li>
                    <li>
                        <div>
                            <div className='flex items-center gap-3 mb-1'>
                                <Avatar className='border' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <div>
                                    <Dropdown
                                        menu={{ items }}
                                        placement="bottomRight"
                                    >
                                        <a onClick={(e) => e.preventDefault()}
                                            className='text-blue-500 hover:cursor-pointer font-semibold'
                                        >
                                            Đỗ Hồng Quân
                                        </a>
                                    </Dropdown>
                                    <div className='text-xs text-gray-600 font-semibold'>Admin</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
