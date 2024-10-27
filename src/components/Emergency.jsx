import React from 'react'
import { Ambulance, Chatbot, Vector2, Wheelchair, Stretcher} from '../Images'
import { Link } from 'react-router-dom'

const Emergency = () => {
    return (

        <>
            <main className='bg-customGreen w-screen h-screen'>
                <div className='flex items-center justify-center bg-customGreen2 relative h-32 pt-9'>
                    <h1 className='text-3xl font-bold '><span className='border-b-4 border-black rounded-sm'>EM</span>ERGENCY</h1> 
                    <img src={Chatbot} alt="chatbot" className='absolute right-4 mt-8 cursor-pointer lg:pr-10' />
                </div>
                <div className='w-full h-4 bg-bar'></div>

                
                <div className='flex justify-center p-6 items-center'>
                <Link to='/ambulance'>
                <img src={Ambulance} alt="ambulance" />
                </Link>
                </div>
                <div className='flex justify-around p-6 items-center'>
                    <Link to='/wheelchair'>
                    <img src={Wheelchair} alt="wheelchair" />
                    </Link>

                    <Link to='/stretcher'>
                    <img src={Stretcher} alt="wheelchair" />
                    </Link>
                </div>

                <div className='mt-40 lg:m-0 flex justify-center'>
                    <img src={Vector2} alt="Vector2"/>
                </div>
                  
            </main>
        </>
  )
}

export default Emergency