import { useState } from 'react';
import Calendar from 'react-calendar'


const BookingDate = ({ date, startDate, setStartDate}) => {
    

    return (
        <div className="text-center">
            <h1>
                Seminar Hall Booking on
            </h1>
            <h1 className='text-green-600 font-semibold'>
                { date}
            </h1>
            <div className="flex justify-center my-6">
                <Calendar onChange={setStartDate} value={startDate}/>
            </div>
        </div>
    )
}

export default BookingDate
