import BookingForm from "./BookingForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select_seat } from "../Redux/seats/seatSlice";

const Seats = () => {
    const selectedSeats = useSelector(state => state.selectSeat.value)
    const dispatch = useDispatch()

    const arr = new Array(50).fill(null);
    
    const [showForm, setShowForm] = useState(false);

    const handleSeatClick = (index) => {
        setShowForm(true)
        dispatch(select_seat(index + 1))
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mx-auto m-8 sm:w-10/12'>
            {arr.map((val, index) => (
                <div key={index} onClick={() => handleSeatClick(index)} className={`text-white ${selectedSeats.includes (index + 1) ? 'bg-red-600' : 'bg-green-600'} w-20 py-4 rounded-lg flex justify-center cursor-pointer`}>
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
