import React from 'react'

export default function Icon({ url }) {
    return (
        <div>
            <img className='w-10' src={url} alt="" />
        </div>
    )
}
