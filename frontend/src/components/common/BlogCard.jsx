import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, Card, Image } from 'antd';
import React from 'react';
const { Meta } = Card;

export default function BlogCard() {
    return (
        <div>
            <Card
                cover={
                    <Image
                        src="https://files.fullstack.edu.vn/f8-prod/blog_posts/10265/6628df53e25a0.png"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <ShareAltOutlined  key="ellipsis" />,
                ]}
                onClick={() => console.log('clicked')}
                className='hover:cursor-pointer'
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Config Zsh bằng Oh-my-zsh và P10k trên WSL cực ngầu ✨"
                    description="Hello anh em , thì như blog trước mình có nói rằng mình ko có dùng Ubuntu, nhưng sao lại có..."
                />
            </Card>
        </div>
    )
}
