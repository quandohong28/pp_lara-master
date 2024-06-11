import { NotificationOutlined } from '@ant-design/icons'
import { Badge, Empty, FloatButton, Modal } from 'antd'
import React, { useState } from 'react'
import ClientRoute from '../../routes/ClientRoute'
import Footer from '../partials/client/Footer'
import Header from '../partials/client/Header'

export default function Client() {
    const [isModalOpen, setIsModalOpen] = useState(true)
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='main min-h-screen mt-16 py-20 px-32'>
                <ClientRoute />
                <FloatButton.Group
                    shape="circle"
                    style={{
                        left: 32,
                    }}
                >
                    <Badge count={5} offset={[-2, 2]}>
                        <FloatButton onClick={() => setIsModalOpen(true)} icon={<NotificationOutlined />} tooltip="Thông báo" />
                    </Badge>
                    <FloatButton.BackTop visibilityHeight={0} tooltip="Lên đầu trang" />
                </FloatButton.Group>
            </main>
            <footer>
                <Footer />
            </footer>

            {/* Modal notification */}
            <Modal
                width={800}
                title="Thông báo"
                open={isModalOpen}
                footer
                onCancel={() => setIsModalOpen(false)}
            >
                <div className='text-center min-h-96'>
                    <div className='flex items-center justify-center min-h-96'>
                        <Empty description="Chưa có thông báo nào" />
                    </div>
                </div>
            </Modal>
        </>
    )
}
