import { Button } from 'antd'
import { HighlightOutlined, ReloadOutlined } from '@ant-design/icons'
import React from 'react'
import BlogCard from '../../common/BlogCard'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <div className='w-1/2 mx-auto'>
            <div className='grid grid-cols-12 mb-5'>
                <Link
                    className='col-span-10 mr-3'
                    to='/blog/new'>
                    <Button type='primary' block size='large' className='font-semibold text-sm' icon={<HighlightOutlined />}>
                        Đăng bài viết
                    </Button>
                </Link>
                <Button block size='large' className='font-semibold col-span-2' icon={<ReloadOutlined />} />
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
    )
}
