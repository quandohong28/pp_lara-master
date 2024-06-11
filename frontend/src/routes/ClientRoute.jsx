import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../components/pages/client/Blog'
import CourseDetail from '../components/pages/client/CourseDetail'
import Home from '../components/pages/client/Home'
import PostDetail from '../components/pages/client/PostDetail'
import CreateBlog from '../components/pages/client/NewPost'
import NotFound from '../components/errors/NotFound'

export default function ClientRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/new' element={<CreateBlog />} />
            <Route path='/blog/:slug' element={<PostDetail />} />
            <Route path='/course/:slug' element={<CourseDetail />} />
            {/* <Route path='/learning-paths' element={<LearningPath />} />
            <Route path='/viewed' element={<Viewed />} />
            <Route path='/liked' element={<Liked />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
