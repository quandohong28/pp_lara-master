import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminCourse from '../components/pages/admin/AdminCourse'
import AdminUser from '../components/pages/admin/AdminUser'
import Dashboard from '../components/pages/admin/Dashboard'

export default function AdminRoute() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/user' element={<AdminUser />} />
            <Route path='/course' element={<AdminCourse />} />
        </Routes>
    )
}
