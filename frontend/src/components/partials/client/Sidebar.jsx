import {
	AppstoreOutlined,
	HistoryOutlined, LikeOutlined, FlagOutlined, SearchOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

const Sidebar = () => {

	const items = [
		{
			key: 'viewed',
			icon: <HistoryOutlined />,
			label: 'Đã xem',
		},
		{
			key: 'liked',
			icon: <LikeOutlined />,
			label: 'Đã thích',
		},
		{
			key: 'saved',
			icon: <FlagOutlined />,
			label: 'Đã lưu',
		},
		{
			key: 'learning',
			label: 'Khoá học đang học',
			icon: <AppstoreOutlined />,
			children: [
				{
					key: 'html-css-co-ban',
					label: 'HTML CSS Cơ Bản',
				},
				{
					key: 'js-nang-cao',
					label: 'JS Nâng Cao',
				},
			],
		},
	];
	return (
		<div className='flex items-center h-screen'>
			<Menu
				defaultSelectedKeys={['1']}
				// selectedKeys={['3']}
				// defaultOpenKeys={['sub1']}
				mode="inline"
				theme="light"
				inlineCollapsed={true}
				items={items}
				style={{
					border: 'none',
					backgroundColor: 'transparent',
				}}
			/>
		</div>
	);
};
export default Sidebar;