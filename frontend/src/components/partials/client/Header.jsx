import { HomeOutlined, LeftOutlined, ReadOutlined, RiseOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Badge } from 'antd'
import { React, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import LoginModal from '../../common/LoginModal'
import SearchModal from '../../common/SearchModal'


export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    const navItems = [
        {
            title: 'Trang chủ',
            icon: <HomeOutlined />,
            path: '/'
        },
        {
            title: 'Lộ trình',
            icon: <RiseOutlined />,
            path: '/learning-paths'
        },
        {
            title: 'Bài viết',
            icon: <ReadOutlined />,
            path: '/blog',
            notification: 5
        }
    ]

    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const [loginModalOpen, setLoginModalOpen] = useState(false)




    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="grid grid-cols-12 items-center justify-between px-5 py-3">
                    <div className='flex gap-4 items-center col-span-3'>
                        <Link to={'/'} className="flex items-center space-x-3">
                            <img src={logo} className="h-8" alt="Lara Master" />
                        </Link>
                        {location.pathname !== '/' &&
                            (
                                <div
                                    className="text-gray-600 text-xs font-bold hover:cursor-pointer hover:text-gray-400"
                                    onClick={() => navigate(-1)}
                                >
                                    <LeftOutlined />
                                    QUAY LẠI
                                </div>
                            )
                        }
                    </div>
                    <div className="col-span-6 md:flex items-center sm:hidden lg:gap-4 md:gap-1 justify-center w-full">
                        {navItems.map((item, index) => {
                            const isActive = item.path === currentPath;
                            return (
                                <div key={index}>
                                    <Badge count={item.notification} offset={[-5, 5]}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setCurrentPath(item.path)}
                                            className={`flex flex-col gap-1 items-center justify-center w-24 px-3 py-3 rounded-2xl ${isActive ? 'bg-gray-200 text-blue-500' : 'hover:bg-gray-100'}`}
                                        >
                                            <span className='text-lg'>{item.icon}</span>
                                            <span className='xs:hidden sm:hidden md:hidden lg:block text-xs font-bold'>{item.title}</span>
                                        </Link>
                                    </Badge>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-span-3 flex items-center gap-4 justify-end">
                        <Button shape="circle" icon={<SearchOutlined />} onClick={() => setSearchModalOpen(true)} />
                        <SearchModal searchModalOpen={searchModalOpen} setSearchModalOpen={setSearchModalOpen} />

                        <Button className='font-bold' onClick={() => setLoginModalOpen(true)}>Đăng nhập</Button>
                        <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
                    </div>
                </div>
            </nav>

        </>
    )
}
