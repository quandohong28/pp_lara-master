import { CommentOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { List, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Lesson() {

    const { courseSlug, lessonSlug } = useParams();

    const navigation = useNavigate();

    const MenuItems = [
        {
            label: 'Thông tin',
            key: 'info',
            icon: <InfoCircleOutlined />
        },
        {
            label: 'Bình luận',
            key: 'commments',
            icon: <CommentOutlined />
        },
    ];

    const data = [
        {
            title: 'Bài 1: Giới thiệu về HTML',
            slug: 'bai-1-gioi-thieu-ve-html',
            video_duration: '20:03',
            updated_at: '20/10/2023'
        },
        {
            title: 'Bài 2: Cài đặt môi trường',
            slug: 'bai-2-cai-dat-moi-truong',
            video_duration: '20:03',
            updated_at: '20/10/2023'
        },
        {
            title: 'Bài 3: Thẻ HTML',
            slug: 'bai-3-the-html',
            video_duration: '20:03',
            updated_at: '20/10/2023'
        }
    ];

    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className="col-span-9">
                    <div className='px-24 bg-black mb-5'>
                        <div>
                            <img className='w-full h-full' src="https://i.ytimg.com/vi/Da1tpV9TMU0/maxresdefault.jpg" alt="" />
                        </div>
                        {/* <iframe width="100%" height="500" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                    </div>
                    <div className='px-20'>
                        <Menu mode="horizontal" items={MenuItems} className='mb-5' />
                        <h1 className='text-xl font-bold'>Khoá học HTML CSS Cơ Bản</h1>
                        <p className='text-sm text-gray-500'>Cập nhật: 20 tháng 12 năm 2023</p>
                        <div className='min-h-screen'></div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h1 className='text-center my-5 font-bold text-lg'>Nội dung khoá học</h1>
                    <List
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item
                                key={index}
                                className='hover:bg-slate-200'
                                style={{ cursor: 'pointer', padding: '10px 20px' }}
                                onClick={() => navigation(`/learning/${courseSlug}/${item.slug}`, {replace: true})}
                            >
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>{item.title}</p>
                                    <span className='italic text-sm'>{item.video_duration}</span>
                                </div>
                                <p>20/10/2023</p>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
