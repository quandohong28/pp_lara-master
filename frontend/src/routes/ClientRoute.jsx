import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/client/Home'
import Blog from '../components/pages/client/Blog'
import CourseDetail from '../components/pages/client/CourseDetail'

export default function ClientRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/course/:slug' element={<CourseDetail />} />
            {/* <Route path='/learning-paths' element={<LearningPath />} />
            <Route path='/viewed' element={<Viewed />} />
            <Route path='/liked' element={<Liked />} /> */}
        </Routes>
    )
}
