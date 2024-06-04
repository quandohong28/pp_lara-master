import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { React, useEffect, useState } from 'react';
import ApiService from '../../../services/ApiService';

export default function AdminUser() {
    const title = 'Tài Khoản';

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        ApiService.fetchData('user')
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
                console.log(data);
                console.log(data.meta);
            })
            .catch(error => console.error(error));
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className='flex gap-3 items-center justify-start'>
                    <img className='w-[32px] h-[32px] rounded-lg' src={record.avatar} />
                    <span className='font-bold'>{record.name}</span>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Vai trò',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <div className='flex gap-2 justify-center'>
                    <Button shape='circle' icon={<InfoCircleOutlined />} />
                    <Button shape='circle' icon={<EditOutlined />} type='primary'/>
                    <Button shape='circle' icon={<DeleteOutlined />} danger/>

                </div>
            )
        },
    ];


    return (
        <div>
            <h1 className='font-bold text-xl mb-10'>{title}</h1>
            <Table
                dataSource={users.data}
                bordered
                size='small'
                columns={columns}
                rowKey="id"
                loading={isLoading}
                pagination="none"
                title={() => 'Header'}
                footer={() => 'Footer'}
            />
        </div>
    );
}
