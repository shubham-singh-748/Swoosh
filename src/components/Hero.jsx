import React from 'react'

import Typed from 'react-typed';

const Hero = () => {

    return (
        <div className='text-white '>
            <div className='max-w-[800px] mt-[96px] w-full h-auto mb-[100px] mx-auto text-center flex flex-col '>
                <p className='uppercase text-[#00df9a] font-bold text-xl mb-3 sm:text-2xl md:text-4xl'> growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 uppercase'>grow with data</h1>

                <div className='flex items-center justify-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold capitalize font-mono py-4 px-14'>fast, Flexible financing for
                        <Typed
                            strings={[' BTC', ' SaSS', ' BTB']}
                            typeSpeed={200}
                            backSpeed={190}
                            className='text-gray-400'
                            loop
                        />

                    </p>

                </div>
                {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms.</p> */}
                <button className='bg-[#00df9a] w-[100px] rounded-md text-2xl font-medium my-6 mx-auto py-3 text-black hover:scale-[1.3] duration-[0.6s]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero