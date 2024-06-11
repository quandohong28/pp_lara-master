import { BellOutlined, LogoutOutlined, MenuOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

export default function Header() {
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
                    <Button className='flex items-center' icon={<MenuOutlined />} />
                </span>
                <img src={logo} alt="" className='w-[160px]' />
            </div>
            <nav>
                <ul className='flex gap-5 items-center justify-end'>
                    <li key={'dashboard'}>
                        <Link to={admin + '/message'}><MessageOutlined /></Link>
                    </li>
                    <li key={'course'}>
                        <Link to={admin + '/notification'}><BellOutlined /></Link>
                    </li>
                    <li>
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                        >
                            <a onClick={(e) => e.preventDefault()}
                                className='text-blue-500 hover:cursor-pointer font-bold'
                            >
                                Đỗ Hồng Quân
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
