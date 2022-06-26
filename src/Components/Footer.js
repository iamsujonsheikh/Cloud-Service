import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube } from 'react-icons/bs';


const Footer = () => {
  return (
    <section className='bg-slate-700 w-full h-full py-10'>
       <main className='w-10/12 mx-auto md:flex items-center'>

         {/* icon section */}
         <div className='w-[50%] justify-center flex items-center space-x-2 md:space-x-8'>

            <BsFacebook className='hover:scale-105 duration-200 text-blue-400 rounded-full p-2 shadow-md shadow-green-600' size={50}/>
            <BsTwitter className='hover:scale-105 duration-200 text-blue-400 rounded-full p-2 shadow-md shadow-green-600' size={50}/>
            <BsInstagram className='hover:scale-105 duration-200 text-blue-400 rounded-full p-2 shadow-md shadow-green-600' size={50}/>
            <BsYoutube className='hover:scale-105 duration-200 text-blue-400 rounded-full p-2 shadow-md shadow-green-600' size={50}/>
        </div> <br />


        {/* news letter section */}
        <div className='w-[50%] justify-center flex-1 felx-col space-y-2'>
            <h1 className='text-xl md:text-2xl font-bold text-green-400'>Subscribe To Our Newsletter</h1>

            <input className='rounded px-4 py-1 w-60' type="text" placeholder='Enter your email' /><br />

            <button className='border rounded py-1 px-2 text-white font-medium bg-green-500'>Subscribe</button>

        </div>
       </main>
    </section>
  )
}

export default Footer