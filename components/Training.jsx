import React from 'react'

const Training = () => {
  return (
    <div className="bg-pink-600 bg-[url('/contact.jpg')] bg-center bg-cover w-full">
      <div className='w-full h-full bg-black/30 md:p-15 p-5 flex items-center justify-center flex-wrap gap-10'>
        <div className='bg-gradient-to-br from-red-200 to-gray-200 rounded w-80 p-3 shadow'>
          <img className='' src="head coach.png" alt="" />
          <p className='font-bold text-lg md:text-xl text-center pt-2 md:pt-5'>John Carter </p>
          <p className='py-2 md:py-5 text-gray-600 text-md font-semibold text-center'>Head Coach, CSCS Certified</p>
        </div>
        <div className='bg-gradient-to-br from-red-200 to-gray-200 rounded w-80 p-3 shadow'>
          <img className='' src="yoga coach.png" alt="" />
          <p className='font-bold text-lg md:text-xl text-center pt-2 md:pt-5'>Emily Rivers </p>
          <p className='py-2 md:py-5 text-gray-600 text-md font-semibold text-center'>Yoga & Recovery Coach  </p>
        </div>
        <div className='bg-gradient-to-br from-red-200 to-gray-200 rounded w-80 p-3 shadow'>
          <img className='' src="nutrients.png" alt="" />
          <p className='font-bold text-lg md:text-xl text-center pt-2 md:pt-5'>Leo Tan </p>
          <p className='py-2 md:py-5 text-gray-600 text-md font-semibold text-center'>Certified Nutrition Specialist</p>
        </div>
      </div>
    </div>
  )
}

export default Training