import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminRoute from '../../routes/AdminRoute'
import Footer from '../partials/admin/Footer'
import Header from '../partials/admin/Header'
import Sidebar from '../partials/admin/Sidebar'

export default function Admin() {
    const breadcrumbItems = [
        {
            title: <Link to='/admin/dashboard'><HomeOutlined /></Link>,
        },
        {
            title: <Link to='/admin/course'>Khoá học</Link>,
        },
    ]

    return (
        <>
            <header>
                <Header />
            </header>
            <hr />
            <div className='flex gap-3'>
                <aside>
                    <Sidebar />
                </aside>
                <main className='px-16 py-5 w-full min-h-screen'>
                    <Breadcrumb
                        items={breadcrumbItems}
                        className='mb-10'
                    />
                    <AdminRoute />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
