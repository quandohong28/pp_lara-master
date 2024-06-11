import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Lesson from '../pages/client/Lesson'
import logo from '../../assets/logo-dark.svg'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function Learning() {
    const navigate = useNavigate();
    return (
        <div>
            <header className='fixed top-0 left-0 right-0 bg-slate-800 px-4 py-4 text-white flex item justify-between'>
                <div className='flex gap-8 items-center'>
                    <div onClick={() => navigate(-1)} className="text-gray-300 text-lg font-bold hover:text-gray-500 hover:cursor-pointer">
                        <LeftOutlined />
                    </div>
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="h-7" alt="Lara Master" />
                    </Link>
                </div>
            </header>
            <main className='pt-14'>
                <Routes>
                    <Route path="/:courseSlug/:lessonSlug" element={<Lesson />} />
                </Routes>
            </main>
            <footer className='fixed bottom-0 left-0 right-0 bg-gray-200 text-white p-4 flex items-center justify-center gap-4'>
                <Button disabled>
                    <Link to={'/'} className="text-gray-600 text-xs font-bold">
                        <LeftOutlined />
                        BÀI TRƯỚC
                    </Link>
                </Button>
                <Button>
                    <Link to={'/'} className="text-gray-600 text-xs font-bold">
                        BÀI TIẾP THEO
                        <RightOutlined />
                    </Link>
                </Button>
            </footer>
        </div>
    )
}
