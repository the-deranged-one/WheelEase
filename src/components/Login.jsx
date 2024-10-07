import React, { useState } from 'react';
import { z } from 'zod';

// Define the schema for phone number validation
const phoneNumberSchema = z.string().regex(/^[0-9]{10}$/, {
    message: "Phone Number must be exactly 10 digits and cannot contain letters",
});

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);

    // Function to validate the phone number
    const validatePhoneNumber = (value) => {
        try {
            phoneNumberSchema.parse(value);
            setError(''); // Clear error if valid
            setIsValid(true); // Set isValid to true
        } catch (err) {
            setError(err.errors[0].message); // Set the error message
            setIsValid(false); // Set isValid to false
        }
    };

    // Handle changes in the input field
    const handleInputChange = (e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, ''); // Only allow digits
        setPhoneNumber(newValue); // Update the state
        validatePhoneNumber(newValue); // Validate the new input value
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Optionally handle form submission here
        console.log("Phone Number:", phoneNumber);
    };

    return (
        <>
            <main className='bg-customGreen w-screen h-screen'>
                <div className='flex h-24 justify-start items-center px-8 bg-customGreen lg:justify-center'>
                    <h1 className='text-3xl font-bold'>
                        <span className='border-b-[6px] border-black py-2'>Log</span> in
                    </h1>
                    <h3 className='text-xl font-medium text-gray-800 ml-6'>Sign up</h3>
                </div>

                <div className='w-full h-4 bg-bar'></div>

                <div className='w-full h-80 mt-8'>
                    <form onSubmit={handleLogin}>
                        <div className='flex justify-evenly lg:justify-center'>
                            <label className='border-b-2 border-black lg:mr-8'>Ph No:</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handleInputChange} // Use the new handler
                                required
                                className='bg-customGreen border-b-2 border-black py-1 lg:ml-8 px-3 focus:outline-none focus:border-green-500'
                            />
                            {isValid && (
                                <div className="icon-container">
                                    <i className="ri-checkbox-circle-fill" style={{ color: 'green', fontSize: '24px' }}></i>
                                </div>
                            )}
                        </div>

                        <div className='w-full h-16 flex justify-center items-center lg:mt-10'>
                            <p className=''>Login with your phone number</p>
                        </div>

                        {error && <p className="text-red-600 px-10 text-center">{error}</p>}

                        <div className='flex justify-center items-center mt-10 h-16'>
                            <button type='submit' className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;
