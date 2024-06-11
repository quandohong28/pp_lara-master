import { CommentOutlined, LikeOutlined, SendOutlined, TagOutlined, EyeOutlined, CalendarOutlined } from '@ant-design/icons'
import { Button, Form, Image } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useRef } from 'react'
import BlogCard from '../../common/BlogCard'
import Code from '../../common/Code'

export default function PostDetail() {
    const commentRef = useRef();

    return (
        <div>
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-8">
                    <div className="post mb-10">
                        <h1 className='font-bold text-2xl mb-4'>Config Zsh bằng Oh-my-zsh và P10k trên WSL cực ngầu</h1>
                        <div className='flex justify-between items-start mb-10'>
                            <div>
                                <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'><CalendarOutlined className='mr-1.5' />10/10/2021</span>
                                <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'><EyeOutlined className='mr-1.5' />100</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Button icon={<LikeOutlined />} >100</Button>
                                <Button icon={<CommentOutlined />} >20</Button>
                                <Button icon={<TagOutlined />} />
                            </div>
                        </div>

                        <p className='mb-10 leading-8 text-lg font-light'>Sau khoảng thời gian làm việc trên Ubuntu, có quá nhiều lệnh bạn phải nhớ, hoặc đôi khi bạn phải thực hiện đi thực hiện lại nhiều lần, giá như terminal ngoài auto-complete mà có thể suggest được lệnh cho chúng ta thì tốt biết mấy. Bài viết này giúp bạn giải quyết điều đó!

                            Về mình, thực ra mình là một thằng Developer khá đơn giản 😄 nên mình thích mọi thứ cũng đơn giản, rộng rãi và thoáng đãng. Cũng bởi lẽ đó nên ngay từ khi bắt đầu sử dụng Ubuntu để làm việc, mình đã yêu thích Terminal mặc định của nó; ngay từ khi nhìn cái logo đơn giản nhưng không kém phần bắt mắt.

                            Để làm được việc suggest lệnh thì với /bin/bash là không đủ, chúng ta cần đổi bộ shell mặc định này sang một thằng khác mạnh mẽ hơn đó là Z-Shell hay còn gọi là zsh.

                            Đi kèm zsh có một framework đó là oh-my-zsh support mọi thứ từ theme, command line prompts, auto suggestions, .etc. Trong bài mình sẽ hướng dẫn mọi người cài đặt zsh và oh-my-zsh trên Ubuntu 18.04, tích hợp plugin zsh-autosuggestions cho oh-my-zsh để terminal có thể tự động suggest lệnh cho chúng ta. Hãy cùng bắt đầu nhé!
                        </p>
                        <div className='mb-10'>
                            <Code content={`
                            navigator.clipboard.writeText('Nội dung cần sao chép')
                                .then(function(){
                                    console.log('Sao chép thành công!');
                                })
                            `} />
                        </div>
                        <Image src='https://via.placeholder.com/800x400' alt='image' />
                        <p className='italic text-sm'>Hình ảnh 400x400</p>
                    </div>

                    <div id="post-comment">
                        <h1 className='font-semibold text-xl'>Bình luận (20)</h1>
                        <div className='px-5 py-8'>
                            <div className='mb-5'>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-4">
                                        <p className="inline-flex items-center text-sm text-gray-900 font-semibold">
                                            <img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael Gough"
                                            />
                                            Michael Gough
                                        </p>
                                        <p className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                            <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                                                Feb. 8, 2022
                                            </time>
                                        </p>
                                        <span className='hover:underline font-bold text-sm text-blue-600 hover:cursor-pointer'>Trả lời</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 mb-2">
                                    Very straight-to-point article. Really worth time reading. Thank you!
                                    But tools are just the instruments for the UX designers. The knowledge
                                    of the design tools are as important as the creation of the design
                                    strategy.
                                </p>
                            </div>
                            <Form className="mb-6 relative">
                                <TextArea
                                    className='mb-3'
                                    rows={5}
                                    placeholder="Viết bình luận..."
                                    ref={commentRef}
                                />
                                <Button className='absolute px-3 bottom-5 right-5 font-semibold text-blue-500' icon={<SendOutlined />}>Gửi</Button>
                            </Form>
                        </div>

                    </div>

                </div>
                <div className="col-span-4 text-right">
                    <p className='font-bold mb-10 text-xl'>Bài viết liên quan</p>
                    <BlogCard small={true} />
                </div>
            </div>
        </div >
    )
}
