import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'



const Navbar = () => {
    const [open, setOpen] = useState(false);

    // create toggle function
    const handleOpenNav = () =>{
        setOpen(!open)
    }

    // create toggle function
    const handleCloseNav = () =>{
        setOpen(!open)
    }
  return (
    <section className='w-full px-4 fixed z-10 bg-slate-700 h-16 flex justify-between items-center'>

        {/* logo section */}
        <h1 className='text-white text-3xl font-bold cursor-pointer'>onnn</h1>

        {/* navigation section */}
        <ul className='md:flex space-x-8  font-semibold text-slate-200 uppercase hidden'>

            <li className='cursor-pointer'>
            <Link to="home" smooth={true} offset={-30} duration={500}>Home</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="service" smooth={true} offset={-25} duration={500}>Services</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="about" smooth={true} offset={-20} duration={500}>About</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="support" smooth={true} offset={-50} duration={500}>Support</Link>
            </li>
        </ul>

        {/* sign in button section */}
        <button className='hidden md:block rounded bg-blue-700 text-white font-medium hover:bg-blue-800 py-1 px-4'>Sign In</button>

        {/* navbar mobile section */}
        <div onClick={handleOpenNav} className='md:hidden'>
            {
                (!open) ? <AiOutlineMenuFold className='text-white cursor-pointer' size={25}/> : <AiOutlineClose className='text-white cursor-pointer' size={25}/> 
            }

            {/* mobile navbar section */}

        <ul className={(!open) ? 'hidden':'absolute top-14 w-full bg-slate-700 left-0 uppercase text-slate-200 font-medium px-10'}>

            <li className='cursor-pointer border-b-2 text-center py-2 hover:bg-gray-800 rounded duration-500'>
            <Link onClick={handleCloseNav} to="home" smooth={true} offset={-50} duration={500}>Home</Link>
            </li>

            <li className='cursor-pointer border-b-2 text-center py-2 hover:bg-gray-800 rounded duration-500'>
            <Link onClick={handleCloseNav} to="service" smooth={true} offset={-50} duration={500}>Services</Link>
            </li>

            <li className='cursor-pointer border-b-2 text-center py-2 hover:bg-gray-800 rounded duration-500'>
            <Link onClick={handleCloseNav} to="about" smooth={true} offset={-50} duration={500}>About</Link>
            </li>

            <li className='cursor-pointer border-b-2 text-center py-2 hover:bg-gray-800 rounded duration-500'>
            <Link onClick={handleCloseNav} to="support" smooth={true} offset={-55} duration={500}>Support</Link>
            </li>
            
            

            {/* sign in button section */}
        <button className='w-full my-6 duration-300 rounded bg-blue-700 text-white font-medium hover:bg-blue-800 py-2'>Sign In</button>
        </ul>

        

        </div>

    </section>
  )
}

export default Navbar