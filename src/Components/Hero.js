import React from 'react'
import cloud from '../asset/Cloud.png'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <section name='home' className='w-full h-screen bg-slate-700 px-4 grid md:grid-cols-2 mx-auto items-center py-4'>
        
        {/* tittle section */}
        <div className='w-5/6 mx-auto'>
            
        <Typed
            className='text-slate-300'
                    strings={['Cheapest Hosting on Planet Earth']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
        />

            <h1 className='text-4xl md:text-5xl font-bold text-white'>
                <span className='text-green-400'>ONN</span> Web Services
            </h1><br />

            <p className='text-slate-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatem ratione aspernatur hic nulla illum nesciunt ea adipisci in enim animi architecto aliquid, incidunt porro amet! Qui ipsam autem consectetur.
            </p>

            <button className='border rounded px-10 my-4 py-1 text-slate-200 font-medium hover:bg-slate-800 duration-300'>
                Sign In
            </button>
        </div>

        {/* image section */}
        <div className='w-6/6 mx-auto'>
            <img className='w-ful rounded-full' src={cloud} alt="" />
        </div>

    </section>
  )
}

export default Hero