import React from 'react'

import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white '>
            <div className='max-w-[1240px] mx-auto grid grid-col-3 sm:flex gap-8 '>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8 capitalize'>single user</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 '>500 GB Strorage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md my-6 mx-auto px-14 py-3 text-2xl font-bold'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-gray-200 p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8 capitalize'>double user</h1>
                    <p className='text-center font-bold text-4xl'>$200</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 '>800 GB Strorage</p>
                        <p className='py-2 border-b mx-8'>3 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                    </div>
                    <button className='text-[#00df9a] bg-black rounded-md my-6 mx-auto px-14 py-3 text-2xl font-bold'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8 capitalize'>triple user</h1>
                    <p className='text-center font-bold text-4xl'>$300</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 '>1 TB Strorage</p>
                        <p className='py-2 border-b mx-8'>10 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md my-6 mx-auto px-14 py-3 text-2xl font-bold'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards