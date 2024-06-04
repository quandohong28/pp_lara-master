import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import logo from '../../assets/favicon.svg';

export default function LoginModal(showModal) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {

    }
    return (
        <>
            <Modal open={isModalOpen} footer onCancel={handleCancel}>
                <div className='p-10'>
                    <div className='modal-header text-center mb-10'>
                        <img className='mx-auto mb-5' width={48} src={logo} alt={logo} />
                        <h1 className='text-lg'>Đăng nhập vào hệ thống <span className='font-bold'>Lara Master</span></h1>
                    </div>
                    <div className='form text-center'>
                        <form class="max-w-sm mx-auto">
                            <div class="mb-5">
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                            </div>
                            <div class="mb-5">
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Mật khẩu' required />
                            </div>
                            <div class="flex items-start mb-5">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ms-2 text-sm text-gray-900 dark:text-gray-300">Nhớ tài khoản</label>
                            </div>
                            <div className='flex flex-col'>
                                <Button onSubmit={handleSubmit} className='font-bold'>Đăng nhập</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}
