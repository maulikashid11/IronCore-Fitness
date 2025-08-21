"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div className="w-full h-100 bg-[url('/contact.jpg')] bg-center bg-cover text-white">
            <div className='bg-black/60 w-full min-h-screen mx-auto p-2'>
                <h1 className='text-center text-3xl md:text-6xl font-bold py-10'>What People Say?</h1>
                <Swiper modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={3}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className='md:w-[70%] mx-auto'
                >
                    <SwiperSlide>
                        <p className='text-xl md:text-3xl text-gray-300'>"I lost 15kg in 6 months and found a support system I never knew I needed!" </p>
                        <p className='text-xl fond-semibold my-5'>- Sarah  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className='text-xl md:text-3xl text-gray-300'>"Great vibes, great people, amazing results."</p>
                        <p className='text-xl fond-semibold my-5'>- Jason  </p>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials