import { configureStore } from "@reduxjs/toolkit";
import selectedSeatReducer from './seats/seatSlice'

export default configureStore({
    reducer: {
        selectSeat: selectedSeatReducer
    }
})