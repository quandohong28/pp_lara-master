import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/errors/NotFound'
import AdminCategory from '../components/pages/admin/AdminCategory'
import AdminCourse from '../components/pages/admin/AdminCourse'
import AdminFile from '../components/pages/admin/AdminFile'
import AdminInvoice from '../components/pages/admin/AdminInvoice'
import AdminNews from '../components/pages/admin/AdminNews'
import AdminPost from '../components/pages/admin/AdminPost'
import AdminUser from '../components/pages/admin/AdminUser'
import Conversation from '../components/pages/admin/Conversation'
import Dashboard from '../components/pages/admin/Dashboard'
import AdminCustom from '../components/pages/admin/AdminCustom'
import Setting from '../components/pages/admin/Setting'

export default function AdminRoute() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/user' element={<AdminUser />} />
            <Route path='/category' element={<AdminCategory />} />
            <Route path='/course' element={<AdminCourse />} />
            <Route path='/post' element={<AdminPost />} />
            <Route path='/invoice' element={<AdminInvoice />} />
            <Route path='/news' element={<AdminNews />} />
            <Route path='/file' element={<AdminFile />} />
            <Route path='/custom' element={<AdminCustom />} />
            <Route path='/conversation' element={<Conversation />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
