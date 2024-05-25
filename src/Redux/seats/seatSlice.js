import { createSlice } from "@reduxjs/toolkit";

export const selectedSeatSlice = createSlice({
    name: 'selectedSeat',
    initialState: {
        value: []
    },
    reducers: {
        select_seat: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { select_seat } = selectedSeatSlice.actions;
export default selectedSeatSlice.reducer;