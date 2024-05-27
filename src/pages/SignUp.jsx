import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signUp', formData);
            console.log(response.data);
            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error("There was an error signing up!", error.response.data);
            setError(error.response.data.message)
        }
    };

    return (
        <div className='flex items-center justify-center pt-7'>
            <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name='name'
                        type="text" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your name...'
                        value={formData.name}
                        onChange={onChange}
                    />
                    <p className="text-red-600">
                        { error }
                    </p>
                    <input 
                        name='email'
                        type="email" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your email...'
                        value={formData.email}
                        onChange={onChange}
                    />
                    <input 
                        name='password'
                        type="password" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-2'
                        placeholder='Create a password...'
                        value={formData.password}
                        onChange={onChange}
                    />
                    <p className='text-sm mb-6'>
                        If you already have an account, click here to 
                        <Link to={'/login'} className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Login
                        </Link>
                    </p>
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;


