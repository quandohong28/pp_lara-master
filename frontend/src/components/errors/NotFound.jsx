import { LeftOutlined, HomeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div classname="flex min-h-screen items-center justify-center">
            <div className="mx-auto max-w-screen-sm text-center">
                <img width={400} className='mx-auto' src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-7621869-6167023.png?f=webp" alt="" />
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-500">
                    Không tìm thấy trang
                </p>
                <p className="mb-4 text-gray-500">
                    Không tìm thấy trang yêu cầu, vui lòng kiểm tra lại đường dẫn, Đường dẫn hiện tại: <span className="font-medium">{location.pathname}</span>
                </p>
                <div className="flex justify-center item-center gap-3">
                    <Button onClick={() => navigate(-1)} className='font-semibold text-sm' icon={<LeftOutlined />} >Quay lại</Button>
                    <Link to="/" className="text-blue-500 hover:underline">
                        <Button type='primary' className='font-semibold text-sm' icon={<HomeOutlined />} >Trang Chủ</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
