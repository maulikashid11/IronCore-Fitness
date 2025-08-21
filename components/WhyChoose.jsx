import React from 'react'

const WhyChoose = () => {
    return (
        <div className='bg-red-50 p-5'>
            <h1 className='text-4xl md:text-6xl text-zinc-900 font-bold md:py-20 py-10 text-center'>Why Choose Us?</h1>
            <div className='flex mx-10 justify-center items-center md:gap-20 gap-10 flex-wrap'>
                <div className=''>
                    <img className='w-30 mx-auto' src="certified.svg" alt="" />
                    <h2 className='my-4 text-2xl text-gray-400  text-center'>Personal Training</h2>
                </div>
                <div className=''>
                    <img className='w-30 mx-auto' src="modern.svg" alt="" />
                    <h2 className='my-4 text-2xl text-gray-400  text-center'>Modern Equipment</h2>
                </div>
                <div className=''>
                    <img className='w-30 mx-auto' src="friendly.jpg" alt="" />
                    <h2 className='my-4 text-2xl text-gray-400  text-center'>Friendly Environment</h2>
                </div>
                <div className=''>
                    <img className='w-30 mx-auto' src="membership.jpg" alt="" />
                    <h2 className='my-4 text-2xl text-gray-400  text-center'>Flexible Membership Plans</h2>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose