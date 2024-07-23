import {
    CloudServerOutlined,
    CloudUploadOutlined,
    RestOutlined
} from '@ant-design/icons';
import { React } from 'react';

export default function AdminFile() {
    const title = 'Quản lý tệp tin';

    const actionItems = [
        {
            key: 'upload',
            title: 'Tải lên',
            icon: <CloudUploadOutlined />,
            onClick: () => console.log('Tải lên'),
            value: 3312,
            col: 3
        },
        {
            key: 'trash',
            title: 'Thùng rác',
            icon: <RestOutlined />,
            onClick: () => console.log('Thùng rác'),
            value: 0,
            col: 3
        },
        {
            key: 'server',
            title: 'Máy chủ kết nối',
            icon: <CloudServerOutlined />,
            onClick: () => console.log('Máy chủ kết nối'),
            col: 3
        },
    ]



    return (
        <div>
            <h1 className='font-bold text-xl mb-10'>{title}</h1>
            <div className="grid grid-cols-12 gap-5 mb-10">
                {actionItems.map(item => (
                    <div
                        key={item.key}
                        className={`col-span-${item.col} hover:bg-gray-100 flex flex-col items-center justify-center hover:cursor-pointer border px-3 h-36 rounded-lg w-full text-center`}
                        onClick={item.onClick}
                    >
                        <div className='text-blue-500 text-3xl mb-3'>{item.icon}</div>
                        <div className='text-sm font-bold '>{item.title}</div>
                        {item.key !== 'server' && (
                            <p className='text-xs italic text-gray-500'>{item.value} tệp</p>
                        )}
                    </div>
                ))}

            </div>

            <div className="mb-10 border rounded p-5">
                
            </div>
        </div>


    );
}
