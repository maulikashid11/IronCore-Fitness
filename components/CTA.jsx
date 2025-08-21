import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <div className='bg-purple-600 p-10'>
            <h2 className='text-4xl md:text-7xl font-bold py-3 sm:py-10 text-white text-center'>Start your fitness journey today.  </h2>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-10 items-center mx-auto my-5'>
                <Link href={'/contact'} className='sm:p-5 p-3 rounded-md shadow text-md sm:text-xl font-bold text-white bg-orange-600 hover:bg-transparent border-2  duration-200 cursor-pointer'>Join Now</Link>
                <Link href={'/contact'} className='sm:p-5 p-3 rounded-md shadow text-md sm:text-xl font-bold text-white bg-white/10 hover:bg-white/20 duration-200 cursor-pointer'>Visit Us</Link>
            </div>
        </div>
    )
}

export default CTA