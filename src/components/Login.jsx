import React, { useState } from 'react'
import {z} from 'zod'

const phoneNumberSchema=z.string().regex(/^[0-9]{10}$/,{
    message:"Phone Number must be exactly 10 digits",
});

const Login = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();

        try
        {
            phoneNumberSchema.parse(phoneNumber);
            setError('');
            console.log("Phone Number:",phoneNumber);
        }
        catch (err)
        {
            setError(err.errors[0].message);
        }
    };


    return (
        <>
            <main className='bg-customGreen'>
                <div className='flex h-24 justify-start items-center px-8 bg-customGreen' >
                    <h1 className='text-3xl font-bold '>
                        <span className='border-b-[6px] border-black py-2'>Log</span> in</h1>
                    <h3 className='text-xl font-medium text-gray-800 ml-6'>Sign up</h3>
                </div>

                <div className='w-full h-4 bg-bar'></div>

                <div className='w-full h-80 mt-8'>
                    <form onSubmit={handleLogin}>
                        <div className='flex justify-evenly' >
                            <label className='border-b-2 border-black'>Ph No:</label>
                            <input
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                className='bg-customGreen border-b-2 border-black py-1'
                            />
                        </div>

                        <div className='w-full h-16 flex justify-center items-center'>
                            <p className=''>Login with your phone number</p>
                        </div>

                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                        <div className='flex justify-center items-center mt-16 md:mt-24 h-16'>
                            <button type='submit' className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                                Log in
                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login