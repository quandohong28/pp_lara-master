import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import React from 'react'
import BlogCard from '../../common/BlogCard'

export default function Blog() {
    return (
        <div className='w-1/2 mx-auto'>
            <div className='text-center flex flex-col mb-5'>
                <Button type='primary' className='flex items-center justify-center p-5 font-bold'>
                    <PlusCircleOutlined />
                    Thêm Bài Viết
                </Button>
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
    )
}
