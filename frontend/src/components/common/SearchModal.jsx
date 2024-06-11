import { Modal } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchModal({ searchModalOpen, setSearchModalOpen }) {

    const [searchResults, setSearchResults] = useState([])

    const handleSearch = (value) => {

    }

    return (
        <div>
            <Modal
                title="Tìm kiếm"
                style={{
                    top: 100,
                }}
                open={searchModalOpen}
                setModalOpen={searchModalOpen}
                onCancel={() => setSearchModalOpen(false)}
                footer
                width={1000}
            >
                <div className='text-center min-h-96'>
                    <Search
                        placeholder="Tìm kiếm khoá học, video, bài viết, ..."
                        onSearch={value => console.log(value)}
                        style={{ width: 500 }}
                        onChange={(e) => handleSearch(e.target.value)}
                    />

                    <div className='w-1/2 mx-auto'>
                        {searchResults.map((item, index) => (
                            <div key={index} className='p-4 border-b border-gray-200 dark:border-gray-600'>
                                <Link to={item.path}>{item.title}</Link>
                            </div>
                        ))}

                    </div>
                </div>
            </Modal>
        </div>
    )
}
