import React from 'react'

const Date = () => {
    return (
        <>
            <div className='text-center mt-20'>   
                <h1 className="text-xl font-semibold">
                    Seminar Hall booking
                </h1>
            </div>
            <div className='w-48 mx-auto my-12'>
                <input 
                    type="date" 
                    className='w-48 border rounded-lg p-2'
                />
            </div>
        </>
    )
}

export default Date
