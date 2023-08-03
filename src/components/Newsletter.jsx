import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
                <div className='lg:col-span-2 px-4 '>
                    <p className='sm:text-4xl text-3xl font-bold py-2 capitalize '>want tips and tricks to optimize your flow.</p>
                    <p className='text-xl capitalize mt-4 sm:text-2xl font-semibold mb-4'>sign up to our newsletter and stay up to data!</p>
                </div>
                <div className='my-4 px-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                        <input type="email" placeholder='Enter your email' className='outline-none p-3 sm:py-7 py-4 flex w-full rounded-md text-black text-2xl ' />
                        <button className='bg-[#00df9a] rounded-lg text-2xl font-bold my-6 sm:ml-6 px-6 py-3 text-black capitalize hover:scale-[1.3] duration-[0.6s]'>notify me</button>
                    </div>
                    <p className='text-2xl sm:text-3xl mt-4'>We care about the protection of your data. Read our <span className='text-[#00df9a] hover:scale-[1.3] duration-[0.6s]'>Privacy Policy.</span></p>
                </div>

            </div>
        </div>
    )
}

export default Newsletter