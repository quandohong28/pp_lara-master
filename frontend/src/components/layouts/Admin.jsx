import { DesktopOutlined, HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, FloatButton } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AdminRoute from '../../routes/AdminRoute'
import Footer from '../partials/admin/Footer'
import Header from '../partials/admin/Header'
import Sidebar from '../partials/admin/Sidebar'

export default function Admin() {
    const navigate = useNavigate()
    const location = useLocation()

    const [isCollapsed, setIsCollapsed] = useState(false)


    const breadcrumbItems = [
        {
            title: <Link to='/admin/dashboard'><HomeOutlined /></Link>,
        }
    ]

    breadcrumbItems.push({
        title: <Link to={location.pathname}>{location.pathname.split('/').pop()}</Link>,
    })

    const handleCollapsed = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <>
            <header>
                <Header onHandleCollapsed={handleCollapsed} />
            </header>
            <hr />
            <div className='flex'>
                <aside>
                    <Sidebar isCollapsed={isCollapsed} />
                </aside>
                <main className='px-16 py-5 w-full min-h-screen'>
                    <Breadcrumb
                        items={breadcrumbItems}
                        className='mb-10'
                    />
                    <AdminRoute />
                    <FloatButton.Group>
                        <FloatButton onClick={() => navigate('/', { replace: true })} visibilityHeight={0} icon={<DesktopOutlined />} tooltip="Truy cập trang người dùng" />
                        <FloatButton.BackTop visibilityHeight={0} tooltip="Lên đầu trang" />
                    </FloatButton.Group>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
