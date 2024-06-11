import {
	BookOutlined,
	UserOutlined,
	MoneyCollectOutlined,
	SignatureOutlined
} from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
	const naviagte = useNavigate()

	const overviewData = [
		{
			key: '1',
			to: '/admin/revenue',
			icon: <MoneyCollectOutlined />,
			value: '12.842.000đ',
			subtitle: 'Doanh thu'
		},
		{
			key: '2',
			to: '/admin/user',
			icon: <UserOutlined />,
			value: '1.232',
			subtitle: 'Tài khoản'
		},
		{
			key: '3',
			to: '/admin/course',
			icon: <BookOutlined />,
			value: '18',
			subtitle: 'Khoá học'
		},
		{
			key: '4',
			to: '/admin/blog',
			icon: <SignatureOutlined />,
			value: '463',
			subtitle: 'Bài viết'
		},

	]
	return (
		<div>
			<main>
				<div className='mb-10'>
					<h1 className='font-bold text-xl'>Bảng điều khiển</h1>
				</div>
				<div className='text-right mb-3'>
					<Select
						defaultValue="this_month"
						style={{
							width: 120,
						}}
						options={[
							{
								value: 'this_week',
								label: 'Tuần này',
							},
							{
								value: 'this_month',
								label: 'Tháng này',
							},
							{
								value: 'this_year',
								label: 'Năm nay',
							},
						]}
					/>
				</div>
				<div className="flex justify-between item-center gap-5">
					{overviewData.map((item) => (
						<div
							onClick={() => naviagte(item.to)}
							key={item.key}
							className='hover:bg-gray-100 hover:cursor-pointer border px-3 py-5 rounded-lg w-full text-center'
						>
							<div className='text-blue-500 text-3xl mb-3'>{item.icon}</div>
							<div className='font-bold text-xl'>{item.value}</div>
							<div className='text-sm'>{item.subtitle}</div>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}
