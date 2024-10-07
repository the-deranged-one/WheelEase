import React from 'react'
import { Emergency, User, Vector2,EMPLOYEE, NURSE, MayIHelpYou, Doctor } from '../Images'

const FirstPage = () => {
  return (
    <>
        <main className='bg-customGreen w-screen'> 
            <div className='w-full h-16'>
               <h1 className='text-3xl text-center font-bold'>Select your option</h1>
            </div>

            <div className='flex justify-evenly py-5 lg:justify-center' >
                <img src={Emergency} alt="Emergency" className='w-44 h-44 lg:mx-5' />
                <img src={User} alt="User" className='w-44 h-44'/>
            </div>

            <div className='flex justify-evenly py-5 lg:justify-center' >
                <img src={EMPLOYEE} alt="EMPLOYEE" className='w-44 h-44 lg:mx-5' />
                <img src={NURSE} alt="NURSE" className='w-44 h-44'/>
            </div>

            <div className='flex justify-evenly py-5 lg:justify-center' >
                <img src={MayIHelpYou} alt="MayIHelpYou" className='w-44 h-44 lg:mx-5' />
                <img src={Doctor} alt="Doctor" className='w-44 h-44'/>
            </div>

            <div className='flex justify-center'>
                <img src={Vector2} alt="Vector2"/>
            </div>
        </main>
    </>
    
  )
}

export default FirstPage