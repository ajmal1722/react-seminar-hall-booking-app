import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingDate = () => {
    const [value, onChange] = useState(new Date())
    return (
        <>
            <div className='text-center mt-20'>   
                <h1 className="text-xl font-semibold">
                    Seminar Hall booking
                </h1>
            </div>
            <div className='flex justify-center my-12'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default BookingDate
