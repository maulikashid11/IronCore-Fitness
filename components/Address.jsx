import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';

const Address = () => {
    return (
        <div className='bg-blue-950 text-white p-15'>
            <p className='text-center text-4xl font-bold mb-10'>Address</p>
            <div className='flex gap-10 justify-between flex-col md:flex-row'>
                <div className=''>
                    <p className='my-3 text-md '>Email: <span className='text-gray-300'>hello@ironcorefitness.com  </span></p>
                    <p className='my-3 text-md '>Phone: <span className='text-gray-300'>123-456-7890</span></p>
                    <p className='my-3 text-md '>Address<span className='text-gray-300'>: 123 Muscle Ave, FitCity, FC 98765  </span></p>

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
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414898.12529567!2d139.14995752858775!3d35.66735840680979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1751708450408!5m2!1sen!2sin" className='md:w-1/2 rounded-md w-full h-100' style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    )
}

export default Address