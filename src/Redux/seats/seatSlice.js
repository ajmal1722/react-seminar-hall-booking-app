import { createSlice } from "@reduxjs/toolkit";

export const selectedSeatSlice = createSlice({
    name: 'selectedSeat',
    initialState: {
        value: []
    },
    reducers: {
        select_seat: (state, action) => {
            // state.value.push(action.payload)

            // Destructuring the value from payload
            const { date, seatIndex } = action.payload;
            
            // checking if the entry for date already exists
            const existingEntry = state.value.find(entry => entry.date === date)

            if (existingEntry) {
                // If entry for the date exists, add the seatIndex
                existingEntry.seats.push(seatIndex)
            } else {
                // If no entry for the date, create a new one
                state.value.push({ date, seats: [seatIndex] })
            }
        }
    }
})

export const { select_seat } = selectedSeatSlice.actions;
export default selectedSeatSlice.reducer;