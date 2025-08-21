"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-blue-950 text-white p-5'>
            <div className='flex justify-between items-center flex-col sm:flex-row'>
                <img className='w-15 rounded-full' src="./logo.jpeg" alt="" />
                <ul className='flex gap-2 sm:gap-5 sm:flex-row flex-col my-5'>
                    <li><Link className='hover:text-red-900 duration-200' href={'/'}>Home</Link></li>
                    <li><Link className='hover:text-red-900 duration-200' href={'/'}>About</Link></li>
                    <li><Link className='hover:text-red-900 duration-200' href={'/'}>Services</Link></li>
                    <li><Link className='hover:text-red-900 duration-200' href={'/'}>Contact Us</Link></li>
                </ul>
                <div className="flex space-x-4">
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                        <FaInstagram />
                    </a>
                </div>
                <div className="fixed bottom-24 right-4 flex flex-col space-y-3">
                    <a
                        href="tel:+919999999999"
                        className="bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
                        aria-label="Call"
                    >
                        <FaPhone className="text-black" />
                    </a>
                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="text-white" />
                    </a>
                </div>
            </div>
            <hr className='w-[90%] text-gray-300 mx-auto my-5' />
            <p className='text-center'>Copyrights &copy; IronCore Fitness | All rights reserved</p>
        </div>
    )
}

export default Footer