import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingDate = ({setShowForm}) => {
    const [dateValue, setDateValue] = useState(new Date())
    const date = dateValue.toDateString('en-US', {
        day: 'numeric',
        month: 'short',
    })
    return (
        <div className="relative">
            <div className="fixed top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 bg-white p-6 border border-blue-200 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="text-xl mb-4">Calendar</h1>
                    <h1 className="text-xl mb-4">{date}</h1>
                </div>
                <Calendar onChange={setDateValue} value={dateValue} />
                <div className="flex justify-end gap-2 pt-4">
                    <button onClick={() => setShowForm(false)} className='bg-red-500 text-white px-6 py-1 rounded-lg'>
                        Close
                    </button>
                    <button className='bg-green-500 text-white px-6 py-1 rounded-lg'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingDate
