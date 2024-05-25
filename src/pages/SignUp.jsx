import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex items-center justify-center pt-7'>
            <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Sign Up</h1>
                <form action="">
                    <input 
                        name='name'
                        id='name'
                        type="text" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4 '
                        placeholder='Your name...'
                    />
                    <input 
                        name='email'
                        id='email'
                        type="text" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4 '
                        placeholder='Your email...'
                    />
                    <input 
                        name='password'
                        id='password'
                        type="password" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-2'
                        placeholder='Create a password...'
                    />
                    <p className='text-sm mb-6'>
                        If you already have an account, click here to 
                        <Link to={'/login'} type='button' className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Login
                        </Link>
                    </p>
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
