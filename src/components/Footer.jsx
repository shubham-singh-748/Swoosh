import React from 'react'

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
}
    from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full md:text-7xl sm:text-6xl text-5xl font-bold text-[#00df9a]'>React.</h1>
                <p className='py-4 text-xl sm:text-2xl md:text-3xl w-full font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui, doloribus nesciunt eaque accusamus porro quaerat eius reiciendis voluptatem excepturi harum!</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30} className='hover:scale-[1.3] duration-[0.6s]' />
                    <FaDribbbleSquare size={30} className='hover:scale-[1.3] duration-[0.6s]' />
                    <FaGithubSquare size={30} className='hover:scale-[1.3] duration-[0.6s]' />
                    <FaInstagram size={30} className='hover:scale-[1.3] duration-[0.6s]' />
                    <FaTwitterSquare size={30} className='hover:scale-[1.3] duration-[0.6s]' />
                </div>
            </div>
            <div className='lg:col-span-3 flex items-start justify-between px-3 sm:px-10'>

                <div className='flex flex-col text-center'>
                    <p className='font-medium text-gray-500 underline capitalize text-xl sm:text-4xl mb-5'>solutions</p>
                    <ul className='capitalize space-y-2 text-lg sm:text-2xl '>
                        <li classname='py-2 text-sm '>Analytics</li>
                        <li classname='py-2 text-sm '>Marketing</li>
                        <li classname='py-2 text-sm '>commerce</li>
                        <li classname='py-2 text-sm '>insights</li>
                    </ul>
                </div>

                <div className='flex flex-col flex-wrap text-center'>
                    <p className='font-medium text-gray-500 underline capitalize text-xl sm:text-4xl mb-5'>support</p>
                    <ul className='capitalize space-y-2 text-lg sm:text-2xl '>
                        <li classname='py-2 text-sm '>pricing</li>
                        <li classname='py-2 text-sm '>documentation</li>
                        <li classname='py-2 text-sm '>guides</li>
                        <li classname='py-2 text-sm '>API status</li>
                    </ul>
                </div>

                <div className='flex flex-col text-center'>
                    <p className='font-medium text-gray-500 underline capitalize text-xl sm:text-4xl mb-5'>Company</p>
                    <ul className='capitalize space-y-2 text-lg sm:text-2xl '>
                        <li classname='py-2 text-sm '>blogs</li>
                        <li classname='py-2 text-sm '>jobs</li>
                        <li classname='py-2 text-sm '>press</li>
                        <li classname='py-2 text-sm '>career</li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default Footer