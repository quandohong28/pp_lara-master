import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/pages/auth/Login'

export default function AuthRoute() {
  return (
    <div>
        <Routes>
            <Route path='/login' element={Login} />
        </Routes>
    </div>
  )
}
