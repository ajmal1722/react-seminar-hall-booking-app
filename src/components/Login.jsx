import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Login</h1>
                <form action="">
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
                        placeholder='Your password...'
                    />
                    <p className='text-sm mb-6'>
                        If you are new here, click here to 
                        <button type='button' className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Sign Up
                        </button>
                    </p>
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
