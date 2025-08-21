import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-[url('/hero-section.jpg')]  bg-cover bg-center min-h-screen ">
            <div className='bg-black/60 w-full min-h-screen p-2'>
            <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-br  from-red-500 via-white to-white text-center bg-clip-text text-transparent pt-10 ' > Transform Your Body < br /> at IronCore Fitness</h1 >
            <p className='text-center text-xl md:text-2xl pt-10 font-semibold text-white'>Train with expert coaches, cutting-edge equipment, and a community that pushes you forward.</p>
            <div className='flex justify-center md:flex-row flex-col gap-9 items-center mx-auto my-20'>
                <Link href={'/contact'} className='p-5 rounded-md shadow text-xl font-bold text-white bg-orange-600 hover:text-orange-600 hover:bg-white border-2 hover:border-orange-600 duration-200 cursor-pointer'>Join Now</Link>
                <Link href={'/contact'} className='p-5 rounded-md shadow text-xl font-bold text-white border-2 hover:bg-black/30 duration-200 cursor-pointer'>Book Free Trial</Link>
            </div>
            </div>
        </div >
    )
}

export default HeroSection