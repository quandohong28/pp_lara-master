import React from 'react'
import logo from '../../../assets/logo.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

export default function Header() {
    const navItems = [
        {
            title: 'Trang chủ',
            path: '/'
        },
        {
            title: 'Lộ trình học',
            path: '/learning-paths'
        },
        {
            title: 'Bài viết',
            path: '/blog'
        }
    ]


    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Lara Master" />
                    </Link>
                    <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button shape="circle" icon={<SearchOutlined />} />
                        <Button className='font-bold'>Đăng nhập</Button>
                        <Button type='primary' className='font-bold'>Đăng ký</Button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} className="font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
