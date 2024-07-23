import {
    DashOutlined,
    FormOutlined,
    PicCenterOutlined,
    PlusCircleOutlined,
    QrcodeOutlined,
    SunOutlined
} from '@ant-design/icons';
import { React } from 'react';

export default function AdminCustom() {
    const title = 'Tuỳ chỉnh giao diện';

    const toolItems = [
        {
            key: 'qrcode-generate',
            title: 'Tạo mã QR',
            icon: <QrcodeOutlined />,
            onClick: () => 'QRCodeGenerate',
            isDisabled: false,
            col: 3
        },
        {
            key: 'form-generate',
            title: 'Tạo biểu mẫu',
            icon: <FormOutlined />,
            onClick: () => console.log('Tạo biểu mẫu'),
            isDisabled: true,
            col: 3
        },
    ];

    const customInterfaceItems = [
        {
            key: 'banner',
            title: 'Banner',
            icon: <PicCenterOutlined />,
            onClick: () => console.log('Banner'),
            col: 9
        },
        {
            key: 'theme',
            title: 'Giao diện',
            icon: <SunOutlined />,
            onClick: () => console.log('Giao diện'),
            col: 3
        },
        {
            key: 'footer',
            title: 'Footer',
            icon: <PlusCircleOutlined />,
            onClick: () => console.log('Footer'),
            col: 9
        },
        {
            key: 'navbar',
            title: 'Thanh điều hướng',
            icon: <DashOutlined />,
            onClick: () => console.log('Thanh điều hướng'),
            col: 3
        },
    ];


    return (
        <div>
            <h1 className='font-bold text-xl mb-10'>Công cụ</h1>
            <div className="grid grid-cols-12 gap-5 mb-10">
                {toolItems.map(item => (
                    <div
                        key={item.key}
                        className={`col-span-${item.col} ${item.isDisabled ? 'text-gray-400 hover:bg-white' : ''} hover:bg-gray-100 flex flex-col items-center justify-center hover:cursor-pointer border px-3 h-36 rounded-lg w-full text-center`}
                        onClick={item.onClick}
                    >
                        <div className={`text-blue-500 ${item.isDisabled ? 'text-gray-400' : ''}  text-3xl mb-3`}>{item.icon}</div>
                        <div className='text-sm font-bold '>{item.title}</div>
                    </div>
                ))}

            </div>

            <h1 className='font-bold text-xl mb-10'>{title}</h1>
            <div className="grid grid-cols-12 gap-5 mb-10">
                {customInterfaceItems.map(item => (
                    <div
                        key={item.key}
                        className={`col-span-${item.col} hover:bg-gray-100 flex flex-col items-center justify-center hover:cursor-pointer border px-3 h-36 rounded-lg w-full text-center`}
                        onClick={item.onClick}
                    >
                        <div className='text-blue-500 text-3xl mb-3'>{item.icon}</div>
                        <div className='text-sm font-bold '>{item.title}</div>
                    </div>
                ))}

            </div>


        </div>


    );
}
