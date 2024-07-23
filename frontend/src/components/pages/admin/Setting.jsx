import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tabs } from 'antd';
import React from 'react';
import avatar from '/Users/quandohong28/Workspace/lara-master/frontend/src/assets/images/upload/avatar/quandohong28.jpeg';


export default function Setting() {
    const title = 'Cài đặt';

    const menuItems = [
        {
            key: 'account',
            label: 'Tài khoản',
            icon: 'user',
            children:
                <div className='grid grid-cols-12'>
                    <div className='col-span-4 mb-5'>
                        <h2 className='font-semibold'>Thông tin tài khoản</h2>
                        <p>Content of Account</p>
                    </div>
                    <div>
                        <div className="flex">
                            <img width={240} src={avatar} />
                        </div>
                    </div>
                </div>

        },
        {
            key: 'notification',
            label: 'Thông báo',
            icon: 'notification',
            children: <div>Content of Notification</div>
        }
    ]

    return (
        <div>
            <div className='mb-10'>
                <h1 className='font-bold text-xl'>{title}</h1>
            </div>
            <div className='mb-10'>
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    size='small'
                    items={menuItems.map(item => (
                        {
                            label: item.label,
                            key: item.key,
                            children: item.children,
                        }
                    ))}
                />
            </div>
        </div>
    )
}
