import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/pages/admin/Dashboard'
import AdminCourse from '../components/pages/admin/AdminCourse'
import AdminUser from '../components/pages/admin/AdminUser'

export default function AdminRoute() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user' element={<AdminUser />} />
            <Route path='/course' element={<AdminCourse />} />
        </Routes>
    )
}
