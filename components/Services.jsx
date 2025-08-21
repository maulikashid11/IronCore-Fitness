import React from 'react'

const Services = () => {
  return (
    <div className='bg-gray-50 p-5' id='services'>
        <h1 className='text-4xl md:text-6xl text-zinc-900 font-bold py-10 text-center'>What We Offer</h1>
        <div className='flex md:mx-10 justify-center items-center md:gap-20 gap-5 flex-wrap'>
          <div className='shadow p-5 bg-gray-200 rounded-md w-100'>
            <img className='h-50 md:h-70 mx-auto' src="personal training.jpg" alt="" />
            <h2 className='my-8 text-4xl font-semibold text-cen ter'>Personal Training</h2>
            <p className='my-8 text-xl font-semibold text-center text-gray-500  '>Tailored 1-on-1 coaching  </p>
          </div>
          <div className='shadow p-5 bg-gray-200 rounded-md w-100 '>
            <img className='h-50 md:h-70 mx-auto' src="yoga.jpg" alt="" />
            <h2 className='my-8 text-4xl font-semibold text-center'>Group Classes</h2>
            <p className='my-8 text-xl font-semibold text-center text-gray-500  '>HIIT, Yoga, Strength & Cardio</p>
          </div>
          <div className='shadow p-5 bg-gray-200 rounded-md w-100 '>
            <img className='h-50 md:h-70 mx-auto' src="accountibility.jpg" alt="" />
            <h2 className='my-8 text-4xl font-semibold text-center'>Nutrition Coaching</h2>
            <p className='my-8 text-xl font-semibold text-center text-gray-500  '>Meal planning + accountability  </p>
          </div>
          <div className='shadow p-5 bg-gray-200 rounded-md w-100 '>
            <img className='h-50 md:h-70 mx-auto' src="24.jpg" alt="" />
            <h2 className='my-8 text-4xl font-semibold text-center'>24/7 Access</h2>
            <p className='my-8 text-xl font-semibold text-center text-gray-500  '>Train on your time</p>
          </div>
          
        </div>
    </div>
  )
}

export default Services