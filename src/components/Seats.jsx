import BookingForm from "./BookingForm";
import { useState } from "react";

const Seats = () => {
    const arr = new Array(50).fill(null);
    
    const [showForm, setShowForm] = useState(false)

    return (
        <div className='flex flex-wrap justify-center gap-4 mx-auto m-8 sm:w-10/12'>
            {arr.map((val, index) => (
                <div key={index} onClick={() => setShowForm(true)} className="text-white bg-green-600 w-20 py-4 rounded-lg flex justify-center cursor-pointer">
                    {index + 1}
                </div>
            ))}
            { showForm && 
                <BookingForm showForm={showForm} setShowForm={setShowForm} />
            }
        </div>
    )
}

export default Seats
