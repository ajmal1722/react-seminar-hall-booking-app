import Seats from "../components/Seats"
import BookingDate from "../components/BookingDate"
import { useState } from "react"

const HomePage = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    const date = startDate.toDateString('en-US', {
        day: 'numeric',
        month: 'short',
    })

    return (
        <>
            <BookingDate date={date} startDate={startDate} setStartDate={setStartDate} />
            <Seats date={date} startDate={startDate} setStartDate={setStartDate} />
        </>
    )
}

export default HomePage

