import { useState } from 'react';
import Calendar from 'react-calendar'


const BookingDate = ({ startDate, setStartDate}) => {
    

    return (
        <div className="text-center">
            <h1>
                Seminar Hall Booking
            </h1>
            <div className="flex justify-center my-6">
                <Calendar onChange={setStartDate} value={startDate}/>
            </div>
        </div>
    )
}

export default BookingDate
