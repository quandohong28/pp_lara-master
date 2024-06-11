import { UserOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyCarousel from '../../common/MyCarousel';

export default function Home() {
    const navigate = useNavigate();

    const courses = [
        {
            id: '0',
            title: 'HTML CSS Cơ Bản',
            slug: 'html-css-co-ban',
            imageUrl: 'https://media.licdn.com/dms/image/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=Tf2EFl37sb-ltV1w-tGJG9y4ghxvxNNM1y9IBIcwYTY',
            register: 100,
            price: 0,
            isRegisted: false
        },
        {
            id: '1',
            title: 'Javascript Cơ Bản',
            slug: 'javascript-co-ban',
            imageUrl: 'https://media.licdn.com/dms/image/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=Tf2EFl37sb-ltV1w-tGJG9y4ghxvxNNM1y9IBIcwYTY',
            register: 100,
            price: 0,
            isRegisted: false
        },
        {
            id: '2',
            title: 'Javascript Nâng cao',
            slug: 'javascript-nang-cao',
            imageUrl: 'https://blog.educalix.com/wp-content/uploads/2023/08/5429830_e4b2_2.jpg',
            register: 3128,
            price: 999000,
            isRegisted: true
        },
        {
            id: '2',
            title: 'Javascript Nâng cao',
            slug: 'javascript-nang-cao',
            imageUrl: 'https://blog.educalix.com/wp-content/uploads/2023/08/5429830_e4b2_2.jpg',
            register: 3128,
            price: 999000,
            isRegisted: true
        },
        {
            id: '2',
            title: 'Javascript Nâng cao',
            slug: 'javascript-nang-cao',
            imageUrl: 'https://blog.educalix.com/wp-content/uploads/2023/08/5429830_e4b2_2.jpg',
            register: 3128,
            price: 999000,
            isRegisted: true
        },
        {
            id: '2',
            title: 'Javascript Nâng cao',
            slug: 'javascript-nang-cao',
            imageUrl: 'https://blog.educalix.com/wp-content/uploads/2023/08/5429830_e4b2_2.jpg',
            register: 3128,
            price: 999000,
            isRegisted: true
        },
        {
            id: '2',
            title: 'Javascript Nâng cao',
            slug: 'javascript-nang-cao',
            imageUrl: 'https://blog.educalix.com/wp-content/uploads/2023/08/5429830_e4b2_2.jpg',
            register: 3128,
            price: 999000,
            isRegisted: true
        },
    ]
    const registedCourses = courses.filter(course => course.isRegisted)
    const freeCourses = courses.filter(course => course.price === 0)
    const proCourses = courses.filter(course => course.price !== 0)


    const handleCardClick = (slug) => {
        navigate(`course/${slug}`)
    }

    const slides = [
        {
            title: "HTML CSS Cơ Bản",
            description: "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
            imageUrl: "https://media.licdn.com/dms/image/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=Tf2EFl37sb-ltV1w-tGJG9y4ghxvxNNM1y9IBIcwYTY",
            color: 'white',
            backgroundColor: '#33003c'
        },
        {
            title: "Javascript Cơ Bản",
            description: "",
            imageUrl: "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
            color: 'black',
            backgroundColor: '#f5ffe4'
        },
        {
            title: "Mở khoá tất cả khoá học với giá ưu đãi",
            description: "This is the description for the third slide.",
            imageUrl: "https://khogiaydantuonggiare.com/uploads/images/icon/khuyen-mai-giay-dan-tuong.jpg"
        }
    ];

    return (
        <div className='home'>
            <div className='mb-10'>
                <MyCarousel slides={slides} />
            </div>

            <div className='p-10'>
                <h1 className='mb-10 text-2xl font-bold'>Tiếp tục học</h1>
                <div className='grid grid-cols-12 gap-x-5 gap-y-10'>
                    {registedCourses.map(course => (
                        <Card
                            size='small'
                            className='col-span-3 w-full items-center'
                            key={course.id}
                            onClick={() => handleCardClick(course.slug)}
                            hoverable
                            cover={<img src={course.imageUrl} />}
                        >
                            <h1 className='font-bold mb-1 text-lg'>{course.title}</h1>
                            <div className="flex items-center justify-between text-xs">
                                <div>
                                    <UserOutlined className='me-2' />
                                    {course.register}
                                </div>
                                <div>
                                    <HeartOutlined className='me-2 text-red-500' />
                                    {course.register}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <div className='p-10'>
                <h1 className='mb-10 text-2xl font-bold'>Khoá Học Miễn Phí</h1>
                <div className='grid grid-cols-12 gap-5'>
                </div>
            </div>

            <div className='p-10'>
                <h1 className='mb-10 text-2xl font-bold'>Khoá Học Pro</h1>
                <div className='grid grid-cols-12 gap-x-5 gap-y-10'>
                    {registedCourses.map(course => (
                        <Card
                            size='small'
                            className='col-span-3 w-full items-center'
                            key={course.id}
                            onClick={() => handleCardClick(course.slug)}
                            hoverable
                            cover={<img src={course.imageUrl} />}
                        >
                            <h1 className='font-bold mb-1 text-lg'>{course.title}</h1>
                            <div className="flex items-center justify-between">
                                <div className='text-xs'>
                                    <div className='mb-1'>
                                        <UserOutlined className='me-2' />
                                        {course.register}
                                    </div>
                                    <div>
                                        <HeartOutlined className='me-2' />
                                        {course.register}
                                    </div>
                                </div>
                                <div>
                                    <div className='line-through text-gray-500'>
                                        {course.price === 0 ? 'Miễn Phí' : `${course.price.toLocaleString()}đ`}
                                    </div>
                                    <div className='font-bold text-red-500 text-lg'>
                                        {course.price === 0 ? 'Miễn Phí' : `${course.price.toLocaleString()}đ`}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
