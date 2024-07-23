import {
    CopyOutlined,
    DeleteOutlined,
    EditOutlined,
    FileExcelOutlined,
    FilePdfOutlined,
    IdcardOutlined,
    PrinterOutlined,
    SearchOutlined,
    SmileOutlined,
    ToolOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Button, Input, Modal, Pagination, Table, Tag } from 'antd';
import { React, act, useEffect, useState } from 'react';
import ApiService from '../../../services/ApiService';

export default function AdminUser() {
    const title = 'Tài Khoản (537)  ';

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const actionItems = [
        {
            key: 'add',
            title: 'Thêm mới',
            icon: <UserAddOutlined />,
            onClick: () => console.log('Thêm mới')
        },
        {
            key: 'permission',
            title: 'Phân quyền',
            icon: <ToolOutlined />,
            onClick: () => console.log('Phân quyền')
        },
        {
            key: 'role',
            title: 'Cấp bậc',
            icon: <SmileOutlined />,
            onClick: () => console.log('Cấp bậc')
        },
        {
            key: 'certificate',
            title: 'Chứng chỉ',
            icon: <IdcardOutlined />,
            onClick: () => console.log('Chứng chỉ')
        },
    ];

    useEffect(() => {
        ApiService.fetchData('user')
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
                console.log(data.meta);
            })
            .catch(error => console.error(error));
    }, []);


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => (
                <div className='flex gap-3 items-center justify-start'>
                    <img className='w-[44px] h-[44px] rounded-full' src={record.avatar} />
                    <div className='font-bold'>
                        <div className='mb-1 hover:cursor-pointer text-blue-700' onClick={() => setDetailOpenModal(true)}>{name}</div>
                        <Tag>{(record.role == 'student' ? 'Học viên' : record.role)}</Tag>
                    </div>
                </div>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Ngày tham gia',
            dataIndex: 'created_at',
            key: 'created_at',
            // sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
            // sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <div className='flex gap-2 items-center justify-start'>
                    <Button shape='circle' icon={<EditOutlined />} />
                    <Button shape='circle' icon={<DeleteOutlined />} danger />
                </div>
            )
        },
    ];

    const [detailOpenModal, setDetailOpenModal] = useState(false);


    return (
        <div>
            <h1 className='font-bold text-xl mb-10'>{title}</h1>
            <div className="grid grid-cols-12 gap-5 mb-10">
                {actionItems.map(item => (
                    <div
                        key={item.key}
                        className='col-span-3 hover:bg-gray-100 flex flex-col items-center justify-center hover:cursor-pointer border px-3 h-36 rounded-lg w-full text-center'
                    >
                        <div className='text-blue-500 text-3xl mb-3'>{item.icon}</div>
                        <div className='text-sm font-bold'>{item.title}</div>
                    </div>
                ))}

            </div>
            <div className='border rounded-lg p-1'>
                <Table
                    dataSource={users.data}
                    size='small'
                    columns={columns}
                    rowKey="id"
                    loading={isLoading}
                    pagination={false}

                    title={() =>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-1'>
                                <Input placeholder='Tìm kiếm' prefix={<SearchOutlined />} />
                                <Button type=''>Mặc định</Button>
                            </div>
                            <div className='flex gap-3'>
                                <Button icon={<FileExcelOutlined />} />
                                <Button icon={<PrinterOutlined />} />
                                <Button icon={<CopyOutlined />} />
                                <Button icon={<FilePdfOutlined />} />
                            </div>
                        </div>
                    }

                    footer={() =>
                        <div className='py-2 px-5 text-right'>
                            <Pagination></Pagination>
                        </div>
                    }
                />
            </div>


            {/* detail modal */}
            <Modal
                title="Chi tiết tài khoản"
                open={detailOpenModal}
                onCancel={() => setDetailOpenModal(false)}
                width={1000}
                footer
                centered
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>


    );
}
