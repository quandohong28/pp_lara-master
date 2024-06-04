import { Card } from 'antd';
import React from 'react';
import MyCarousel from '../../common/MyCarousel';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const  navigate = useNavigate();

    const freeCourses = [
        {
            id: '1',
            title: 'HTML CSS Cơ Bản',
            slug: 'html-css-co-ban',
            imageUrl: 'https://media.licdn.com/dms/image/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=Tf2EFl37sb-ltV1w-tGJG9y4ghxvxNNM1y9IBIcwYTY',
        }
    ]


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
                <h1 className='mb-10 text-2xl font-bold'>Khoá Học Miễn Phí</h1>
                {freeCourses.map(course => (
                    <Card
                        key={course.id}
                        onClick={() => handleCardClick(course.slug)}
                        hoverable
                        style={{
                            width: 320,
                        }}
                        cover={<img src={course.imageUrl} />}
                    >
                        <p className='font-bold'>{course.title}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}
