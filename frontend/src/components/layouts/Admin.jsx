import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, FloatButton } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminRoute from '../../routes/AdminRoute'
import Footer from '../partials/admin/Footer'
import Header from '../partials/admin/Header'
import Sidebar from '../partials/admin/Sidebar'

export default function Admin() {
    const location = useLocation()
    console.log(location);

    const breadcrumbItems = [
        {
            title: <Link to='/admin/dashboard'><HomeOutlined /></Link>,
        }
    ]

    breadcrumbItems.push({
        title: <Link to={location.pathname}>{location.pathname.split('/').pop()}</Link>,
    })

    return (
        <>
            <header>
                <Header />
            </header>
            <hr />
            <div className='flex'>
                <aside>
                    <Sidebar />
                </aside>
                <main className='px-16 py-5 w-full min-h-screen'>
                    <Breadcrumb
                        items={breadcrumbItems}
                        className='mb-10'
                    />
                    <AdminRoute />
                    <FloatButton.BackTop visibilityHeight={0} tooltip="Lên đầu trang" />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
