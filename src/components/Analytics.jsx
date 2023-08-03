import React from 'react'

import laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4 md:flex'>

            <div className='max-w-[1240px] mx-auto grid'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='uppercase font-bold md:text-3xl sm:text-3xl text-xl text-[#00df9a]'>data analytics dashboard</p>

                <h1 className='capitalize md:text-5xl sm:text-4xl text-3xl font-bold py-2 '>management data analytics centrally</h1>

                <p className='text-xl sm:text-2xl md:text-3xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi ducimus possimus iste saepe, tenetur omnis. Iste ipsum ad nihil eligendi. Aliquid exercitationem vero iusto dolorem harum sequi fuga natus beatae!</p>

                <button className='bg-[#000] text-[#00df9a] w-[100px] rounded-md text-2xl font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-[1.3] duration-[0.6s]'>Get Started</button>
            </div>
        </div>
    )
}

export default Analytics