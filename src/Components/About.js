import React from 'react'

const About = () => {
  return (
    <section name='about' className='bg-slate-700 h-full py-10'>
        <div className='w-10/12 mx-auto space-y-2'>

            <h1 className='text-center text-3xl font-bold text-white'>
                By <span className='text-green-400'>Developers</span> for <span className='text-green-400'>Developers</span>
            </h1>

            <p className='text-center text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic iure ab nihil itaque facilis. Rerum ea ad libero expedita nemo totam repudiandae minima, velit vero odit vel tempora eum.
            </p>
        </div><br />

        {/* card section */}
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className='w-64 h-64  mx-auto bg-slate-800 flex flex-col justify-center items-center rounded-full shadow-lg shadow-green-300 skew-x-6 hover:skew-y-6 duration-300'>
                <p className='text-4xl font-bold text-green-600'>99.99%</p>
                <p className='text-slate-400'>Uptime</p>
            </div>

            <div className='w-64 h-64  mx-auto bg-slate-800 flex flex-col justify-center items-center rounded-full shadow-lg shadow-green-300 skew-x-6 hover:skew-y-6 duration-300'>
                <p className='text-4xl font-bold text-green-600'>24/7</p>
                <p className='text-slate-400'>Customer Serviced</p>
            </div>

            <div className='w-64 h-64  mx-auto bg-slate-800 flex flex-col justify-center items-center rounded-full shadow-lg shadow-green-300 skew-x-6 hover:skew-y-6 duration-300'>
                <p className='text-4xl font-bold text-green-600'>10 GB</p>
                <p className='text-slate-400'>Free Storage</p>
            </div>

            <div className='w-64 h-64  mx-auto bg-slate-800 flex flex-col justify-center items-center rounded-full shadow-lg shadow-green-300 skew-x-6 hover:skew-y-6 duration-300'>
                <p className='text-4xl font-bold text-green-600'>Domain</p>
                <p className='text-slate-400'>Free With Sign Up</p>
            </div>

            
        </div>
    </section>
  )
}

export default About