"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0  w-full h-20 flex justify-between items-center bg-white/30 backdrop-blur-md shadow p-5'>
      <Link href={'/'}><img className='w-15 rounded-full' src="./logo.jpeg" alt="" /></Link>
      <ul className='hidden text-black md:flex gap-5'>
        <li><Link className='hover:text-blue-900 duration-200' href={'/'}>Home</Link></li>
        <li><Link className='hover:text-blue-900 duration-200' href={'/about'}>About</Link></li>
        <li><Link className='hover:text-blue-900 duration-200' href={'/#services'}>Services</Link></li>
        <li><Link className='hover:text-blue-900 duration-200' href={'/contact'}>Contact Us</Link></li>
      </ul>

      <button
        className="md:hidden  focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {
        isOpen && (
          <ul className="md:hidden absolute top-25 right-5 shadow rounded-md  duration-200 px-4 pb-4 pt-2 space-y-2 bg-white backdrop-blur ">
            <li><Link className='hover:text-blue-900 duration-200' href={'/'}>Home</Link></li>
            <li><Link className='hover:text-blue-900 duration-200' href={'/about'}>About</Link></li>
            <li><Link className='hover:text-blue-900 duration-200' href={'#services'}>Services</Link></li>
            <li><Link className='hover:text-blue-900 duration-200' href={'/contact'}>Contact Us</Link></li>
          </ul>
        )
      }
    </div>
  )
}

export default Navbar