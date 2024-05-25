import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { select_seat } from "../Redux/seats/seatSlice";

const BookingForm = ({ showForm, setShowForm, selectedSeatIndex }) => {
    const selectedSeats = useSelector(state => state.selectSeat.value)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: '',
        email: '', 
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(select_seat(selectedSeatIndex))
        console.log('butoon workkdke..........')
        setShowForm(false)
    }
    console.log('selected Seat:' , selectedSeats)
    
    return (
        <div className={"fixed inset-0 flex items-center justify-center"}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg text-gray-900 dark:text-white">
                            Book your seat on 
                            <span className='text-green-400 mx-2 font-semibold'>
                                17-02-2003
                            </span>
                        </h3>
                        <button onClick={() => setShowForm(false)}  type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            X
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" >
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-4"
                                    required
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
