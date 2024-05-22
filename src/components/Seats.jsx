import React from 'react'

const Seats = () => {
    const arr = new Array(50).fill(null);

    return (
        <div className='flex flex-wrap justify-center gap-4 mx-auto m-8 w-10/12'>
            {arr.map((val, index) => (
                <div key={index} className="text-white bg-gray-500 w-20 py-4 rounded-lg flex justify-center cursor-pointer">
                    {index + 1}
                </div>
            ))}
        </div>
    )
}

export default Seats
