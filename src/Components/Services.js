import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa';

const Services = () => {
  return (
    <section name='service' className='w-12/12 md:h-screen mx-auto px-4 bg-slate-300 py-6'>
        <div className='flex flex-col justify-center items-center py-6 space-y-4'>

            <h1 className='text-3xl font-bold text-slate-700'>
                Services
            </h1>

            <p className='text-center md:max-w-[800px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt dicta similique, nobis rerum aliquid tempora sit accusantium unde modi necessitatibus libero cupiditate velit aut culpa, nesciunt vel accusamus. Placeat?
            </p>
        </div>


        <div className='w-10/12 mx-auto grid gap-4 md:grid-cols-2'>

            <div className='bg-gray-600 p-4 rounded-md'>
                <div className='flex items-center space-x-2 text-green-500'>
                    <FaChevronCircleRight />
                    <h1 className='font-medium'>One</h1>
                </div>
                <p className='text-slate-200 pl-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo tenetur maxime hic placeat culpa ducimus voluptate cupiditate, necessitatibus vero tempore ratione debitis error veritatis doloribus, illo at incidunt nihil.
                </p>
            </div>


            <div className='bg-gray-600 p-4 rounded-md'>
                <div className='flex items-center space-x-2 text-green-500'>
                    <FaChevronCircleRight />
                    <h1 className='font-medium'>Two</h1>
                </div>
                <p className='text-slate-200 pl-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo tenetur maxime hic placeat culpa ducimus voluptate cupiditate, necessitatibus vero tempore ratione debitis error veritatis doloribus, illo at incidunt nihil.
                </p>
            </div>


            <div className='bg-gray-600 p-4 rounded-md'>
                <div className='flex items-center space-x-2 text-green-500'>
                    <FaChevronCircleRight />
                    <h1 className='font-medium'>Three</h1>
                </div>
                <p className='text-slate-200 pl-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo tenetur maxime hic placeat culpa ducimus voluptate cupiditate, necessitatibus vero tempore ratione debitis error veritatis doloribus, illo at incidunt nihil.
                </p>
            </div>


            <div className='bg-gray-600 p-4 rounded-md'>
                <div className='flex items-center space-x-2 text-green-500'>
                    <FaChevronCircleRight />
                    <h1 className='font-medium'>Four</h1>
                </div>
                <p className='text-slate-200 pl-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo tenetur maxime hic placeat culpa ducimus voluptate cupiditate, necessitatibus vero tempore ratione debitis error veritatis doloribus, illo at incidunt nihil.
                </p>
            </div>



        </div>
    </section>
  )
}

export default Services