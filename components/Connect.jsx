import React from 'react'

const Connect = () => {
    return (
        <>
            <div className='md:h-80 h-[40vw] w-full flex items-center justify-center overflow-hidden'>
                <img src="./contact.jpg" className='' alt="" />
            </div>
            <div className='p-5 md:p-10 bg-gradient-to-br from-sky-200 to-gray-200'>
                <h2 className='text-center text-5xl font-bold text-blue-950'>Let's Connect</h2>
                <p className='text-center text-gray-800 text-xl my-5'>Have questions? Book a trial? Reach out below.</p>
                <div className='flex flex-col w-[80%] md:w-[60%] mx-auto justify-center gap-5'>
                    <input type="text" className='p-3 shadow bg-white/60 outline-0 rounded-md' placeholder='Enter Name' />
                    <input type="text" className='p-3 shadow bg-white/60 outline-0 rounded-md' placeholder='Enter Email' />
                    <textarea type="text" className='p-3 shadow bg-white/60 outline-0 rounded-md resize-none' placeholder='Write your message...' rows={5}></textarea>
                    <button className='font-semibold p-3 rounded-md bg-purple-600 text-white cursor-pointer hover:bg-purple-600/90 shadow duration-200'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Connect