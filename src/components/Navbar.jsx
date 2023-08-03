import React, { useEffect, useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setnav] = useState(true)

    const handleNav = () => {
        setnav(!nav)
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
            <h1 className='w-full md:text-7xl sm:text-6xl text-5xl font-bold text-[#00df9a] '>React.</h1>
            <ul className=' uppercase md:flex hidden text-3xl gap-7' >
                <li className='p-4 hover:scale-[1.3] duration-500 hover:underline text-[#00df9a]'>Home</li>
                <li className='p-4 hover:scale-[1.3] duration-500 hover:underline hover:text-[#00df9a] '>Company</li>
                <li className='p-4 hover:scale-[1.3] duration-500 hover:underline hover:text-[#00df9a]'>resources</li>
                <li className='p-4 hover:scale-[1.3] duration-500 hover:underline hover:text-[#00df9a]'>about</li>
                <li className='p-4 hover:scale-[1.3] duration-500 hover:underline hover:text-[#00df9a]'>contact</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className='md:hidden'>
                <div className={!nav ? 'absolute left-0 top-0 w-[60%] h-full bg-[#000300] ease-linear duration-[1s]' : 'fixed left-[-100%]'}>
                    <h1 className='text-5xl font-bold text-[#00df9a] m-4'>React.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>resources</li>
                        <li className='p-4 border-b border-gray-600'>about</li>
                        <li className='p-4 border-b border-gray-600'>contact</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar