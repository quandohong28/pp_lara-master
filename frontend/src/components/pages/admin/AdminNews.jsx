import {
    PlusCircleOutlined
} from '@ant-design/icons';
import { Button } from 'antd';
import { React } from 'react';

export default function AdminNews() {
    const title = 'Tin Tức';
    return (
        <div>
            <div className='mb-10'>
                <div className="mb-10">
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Tổng đã tạo: 213
                    </span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Đang hiển thị: 5
                    </span>
                </div>
                <div className="grid grid-cols-12 gap-5 mb-10">
                    <div
                        className='col-span-3 hover:bg-gray-100 flex flex-col items-center justify-center hover:cursor-pointer border px-3 h-36 rounded-lg w-full text-center'
                    >
                        <div className='text-blue-500 text-3xl mb-3'><PlusCircleOutlined /></div>
                        <div className='text-sm font-bold '>Tạo bản tin</div>
                    </div>

                </div>
            </div>

            <div className="mb-10">
                <div className='flex items-center gap-3 mb-2'>
                    <h1 className='font-bold text-xl'>Đang hiển thị</h1>
                    <Button size='small'>Xem trước</Button>
                </div>
                <p className='text-sm italic text-gray-500'>Chỉ nên hiển thị tối đa 5 tin tức cùng lúc</p>
            </div>
        </div>


    );
}
