import { CheckOutlined } from '@ant-design/icons';
import { Button, Image, List } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CourseDetail() {
	const { slug } = useParams();

	const course = {
		id: '1',
		name: 'HTML CSS Cơ Bản',
		slug: 'html-css-co-ban',
		price: 0,
		description: 'Khoá học HTML CSS Cơ Bản sẽ giúp bạn nắm vững kiến thức cơ bản về HTML CSS, giúp bạn xây dựng website cá nhân, website công ty, website bán hàng,...',
		imageUrl: 'https://media.licdn.com/dms/image/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=Tf2EFl37sb-ltV1w-tGJG9y4ghxvxNNM1y9IBIcwYTY',
		lessons: [
			{
				id: '1',
				title: 'Giới thiệu HTML CSS',
				slug: 'gioi-thieu-html-css',
				videoUrl: 'https://www.youtube.com/watch?v=9gTw2EDkaDQ',
				duration: '10:00',
			},
			{
				id: '2',
				title: 'Cài đặt môi trường',
				slug: 'cai-dat-moi-truong',
				videoUrl: 'https://www.youtube.com/watch?v=9gTw2EDkaDQ',
				duration: '15:00',
			},
			{
				id: '3',
				title: 'HTML Cơ Bản',
				slug: 'html-co-ban',
				videoUrl: 'https://www.youtube.com/watch?v=9gTw2EDkaDQ',
				duration: '20:00',
			},
			{
				id: '4',
				title: 'CSS Cơ Bản',
				slug: 'css-co-ban',
				videoUrl: 'https://www.youtube.com/watch?v=9gTw2EDkaDQ',
				duration: '25:00',
			},
			{
				id: '5',
				title: 'Thực hành',
				slug: 'thuc-hanh',
				videoUrl: 'https://www.youtube.com/watch?v=9gTw2EDkaDQ',
				duration: '30:00',
			},
		]
	}

	return (
		<div className='grid grid-cols-12 gap-10'>
			<div className="col-span-8 px-10">
				<h1 className='font-bold text-2xl mb-5'>{course.name}</h1>
				<p className='mb-10'>{course.description}</p>
				<h2 className='font-bold text-xl mb-5'>Kiến thức nắm được sau khi hoàn thành khoá học</h2>
				<div className='mb-5 grid grid-cols-12 gap-10'>
					<div className='col-span-6'>
						<span className=' text-green-500 me-3'><CheckOutlined /></span>
						<span className='text-sm'>Biết cách sử dụng HTML CSS</span>
					</div>
					<div className='col-span-6'>
						<span className=' text-green-500 me-3'><CheckOutlined /></span>
						<span className='text-sm'>Biết cách xây dựng website cá nhân</span>
					</div>
					<div className='col-span-6'>
						<span className=' text-green-500 me-3'><CheckOutlined /></span>
						<span className='text-sm'>Biết cách xây dựng website công ty</span>
					</div>


				</div>

				<h2 className='font-bold text-xl mb-5'>Danh sách bài học</h2>
				<List
					size="large"
					bordered
					dataSource={course.lessons}
					renderItem={(item) => (
						<>
							<List.Item className='flex justify-between items-center'>
								<Link className='font-bold' to={`${item.slug}`}>{item.title}</Link>
								<span className='italic'>{item.duration}</span>
							</List.Item>
						</>
					)}
				/>
			</div>
			<div className="col-span-4 text-center">
				<Image className='rounded-lg mb-5' src={course.imageUrl} />
				<p className='text-green-500 text-center text-2xl mb-5'>{course.price == 0 ? 'Miễn phí' : course.price + 'Đ'}</p>
				<Button className='font-bold' shape='round' size='large' type='primary'>Đăng ký học</Button>
			</div>
		</div>
	)
}
