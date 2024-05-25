import BookingForm from "./BookingForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const Seats = () => {
    const selectSeat = useSelector(state => state.selectSeat.value)
    const arr = new Array(50).fill(null);
    
    const [showForm, setShowForm] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (index) => {
        setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, index + 1]);
        setShowForm(true)
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
