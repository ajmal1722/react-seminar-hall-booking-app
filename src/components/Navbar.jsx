import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-gray-900 h-20 mb-16 text-white flex items-center justify-between px-6'>
            <div className=" text-xl font-semibold sm:mx-6 mx-2">
                <span className='text-yellow-400'>
                    book
                </span>
                <span className='text-green-400 text-2xl'>
                    Tickets
                </span>
            </div>
            <button className='bg-green-500 px-5 py-1 rounded-lg ml-auto'>
                Login
            </button>
        </div>
    )
}

export default Navbar
