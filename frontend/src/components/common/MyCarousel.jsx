import React from 'react'
import { Carousel } from 'antd'

export default function MyCarousel({ slides }) {
    return (
        <Carousel
        autoplay="true"
        autoplaySpeed="1000"
        arrows infinite={false}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <div className='m-0 h-[240px] rounded-3xl grid grid-cols-12 gap-10 border'
                        style={{ color: slide.color, backgroundColor: slide.backgroundColor }}
                    >
                        <div className='col-span-7 p-10'>
                            <h1 className='font-bold text-3xl mb-10'>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                        <div className='col-span-5 pt-4'>
                            <img src={slide.imageUrl} alt="" className='rounded-3xl h-4/5' />
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
