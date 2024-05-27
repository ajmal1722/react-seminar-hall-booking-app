import BookingForm from "./BookingForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select_seat } from "../Redux/seats/seatSlice";

const Seats = ({ date, startDate, setStartDate}) => {
    // getting selected seats from redux store using find method
    const selectedSeatsData = useSelector(state =>
        state.selectSeat.value.find(entry => entry.date === date)?.seats || []
    );
    console.log('selectedSeats:', selectedSeatsData)

    const arr = new Array(50).fill(null);
    
    const [showForm, setShowForm] = useState(false);
    const [selectedSeatIndex, setSelectedSeatIndex] = useState(null)

    const handleSeatClick = (index) => {
        setSelectedSeatIndex(index + 1)
        setShowForm(true)
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mx-auto m-8 sm:w-10/12'>
            {arr.map((val, index) => (
                <div key={index} onClick={() => handleSeatClick(index)} className={`text-white ${selectedSeatsData.includes (index + 1) ? 'bg-red-600' : 'bg-green-600'} w-20 py-4 rounded-lg flex justify-center cursor-pointer`}>
                    {index + 1}
                </div>
            ))}
            { showForm && 
                <BookingForm date={date} setShowForm={setShowForm} selectedSeatIndex={selectedSeatIndex} />
            }
        </div>
    )
}

export default Seats
