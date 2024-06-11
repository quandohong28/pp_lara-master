import { CheckOutlined, ClockCircleOutlined, CloudOutlined, RocketOutlined, TabletOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Image, List } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../../common/Icon';

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

	const phpIcon = 'https://www.php.net/images/logos/new-php-logo.svg';
	const reactIcon = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
	const nodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg';
	const laravelIcon = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg';

	const vscodeIcon = 'https://user-images.githubusercontent.com/29654835/27530003-e78876b8-5a13-11e7-8863-83fbdb900f72.png'
	const chromeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png'

	return (
		<div className='grid grid-cols-12 gap-10'>
			<div className="col-span-8 px-10">

				<div className='mb-10'>
					<h1 className='font-bold text-2xl mb-5'>{course.name}</h1>
					<p className='text-sm'>{course.description}</p>
				</div>

				<div className='mb-10'>
					<h2 className='font-bold text-xl mb-5'>Kiến thức nắm được sau khi hoàn thành khoá học</h2>
					<div className='grid grid-cols-12 gap-10'>
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
				</div>

				<div className="mb-10">
					<h2 className='font-bold text-xl mb-5'>Yêu cầu</h2>
					<div className='col-span-6'>
						<span className=' text-red-500 me-3'><CloseOutlined /></span>
						<span className='text-sm'>Không có yêu cầu cho khoá học này</span>
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
			<div className="col-span-4">
				<div className='text-center mb-10'>
					<Image className='rounded-lg mb-5' src={course.imageUrl} />
					<Link to={`/learning/${course.slug}/${course.lessons[0].slug}`}>
						<Button block className='font-bold mb-10' size='large' type='primary'>{course.price == 0 ? 'Miễn phí' : course.price + 'Đ'}</Button>
					</Link>

					<div className='mb-10'>
						<div className='flex items-center gap-5 text-gray-700 mb-2'>
							<span><RocketOutlined /></span>
							<span className='text-sm'>Trình độ cơ bản</span>
						</div>
						<div className='flex items-center gap-5 text-gray-700 mb-2'>
							<span><TabletOutlined /></span>
							<span className='text-sm'>Tổng số <span className='font-bold'>71 bài học</span></span>
						</div>
						<div className='flex items-center gap-5 text-gray-700 mb-2'>
							<span><ClockCircleOutlined /></span>
							<span className='text-sm'>Thời lượng <span className='font-bold'>10 giờ 29 phút</span></span>
						</div>
						<div className='flex items-center gap-5 text-gray-700 mb-2'>
							<span><CloudOutlined /></span>
							<span className='text-sm'>Học mọi lúc mọi nơi</span>
						</div>
					</div>

				</div>

				<div className="mb-10">
					<h2 className='font-bold text-xl mb-5'>Công cụ</h2>
					<div className="flex gap-5 items-center mb-3">
						<Icon url={vscodeIcon} />
						<Icon url={chromeIcon} />
					</div>
				</div>

			</div>
		</div>
	)
}
