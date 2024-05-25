import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='w-full bg-gray-900 h-20 mb-16 text-white flex items-center justify-between px-6'>
            <div className=" text-xl font-semibold sm:mx-6 mx-2">
                <NavLink to={'/'} >
                    <span className='text-yellow-400'>
                        book
                    </span>
                    <span className='text-green-400 text-2xl'>
                        Tickets
                    </span> 
                </NavLink>
                
            </div>
            <NavLink to={'/login'} className='bg-green-500 px-5 py-1 rounded-lg'>
                Login
            </NavLink>
        </div>
    )
}

export default Navbar
