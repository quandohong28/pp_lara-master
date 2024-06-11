import { Button } from 'antd'
import React from 'react'
import { CopyOutlined } from '@ant-design/icons'

export default function Code({ content, className }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(() => {
            alert('Đã sao chép vào clipboard')
        })
    }

    return (
        <div className={className}>
            <div className='flex items-start gap-1'>
                <code className="w-full text-sm border p-2.5 rounded-lg">
                    {content}
                </code>
                <Button size='large' onClick={handleCopy} icon={<CopyOutlined className='text-gray-500' />} />
            </div>
        </div>
    )
}
