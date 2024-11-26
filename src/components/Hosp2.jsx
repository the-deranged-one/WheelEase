import React from 'react'
import { Advertisement,Advertisement2,Advertisement3, Chatbot, StretcherImg, UserImg, Vector2, WheelchairImg } from '../Images'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hosp2() {
  const settings = {
    dots: false,           // Disable pagination dots for smoothness
    infinite: true,        // Enable infinite scrolling
    speed: 9000,           // Match speed with autoplaySpeed for slow motion
    slidesToShow: 1,       // Show one slide at a time
    slidesToScroll: 1,     // Scroll one slide at a time
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 0,      // No delay between autoplay triggers
    cssEase: "linear",     // Use a linear transition for smoothness
  };
  return (
    <>
        <main className="bg-customGreen w-screen min-h-screen overflow-hidden">
            <div className="flex items-center justify-center bg-customGreen2 relative h-32 pt-9">
                {/* Left Arrow */}
                <div className="absolute left-10">
                    <Link to='/user'>
                        <i className="ri-arrow-left-line text-xl cursor-pointer"></i>
                    </Link>

                </div>

                {/* Title in the Center */}
                <h1 className="text-3xl font-bold">
                    <span className="border-b-4 border-black rounded-sm">US</span>ER
                </h1>

                {/* Chatbot Icon on the Right */}
                <div className="absolute right-4 lg:pr-10">
                    <img src={Chatbot} alt="chatbot" className="mt-8 cursor-pointer" />
                </div>
            </div>

            <div className='w-full h-4 bg-bar'></div>

            <div className='flex justify-start  h-22 items-center px-4'>
                <img src={UserImg} alt="userimage" />
                <div>
                  <h1 className='text-3xl  ml-4 font-bold'>Hello Reya,</h1>
                  <p className='text-center text-xl ml-4'>Welcome to hospital 2</p>
                </div>
                
            </div>
        
            <div className='h-16 flex items-center px-4'> 
              <h1 className='text-2xl font-bold'>Advertisement</h1>
            </div>
            <div>
            <Slider {...settings}>
                        <div>
                            <img src={Advertisement} alt="Advertisement 1" className="w-full rounded-lg" />
                        </div>
                        <div>
                            <img src={Advertisement2} alt="Advertisement 2" className="w-full rounded-lg" />
                        </div>
                        <div>
                            <img src={Advertisement3} alt="Advertisement 3" className="w-full rounded-lg" />
                        </div>
                    </Slider>
            </div>

            <div className='h-16 flex items-center px-4'> 
              <h1 className='text-2xl font-bold'>Booking</h1>
            </div>

            <div className='flex justify-evenly py-3 lg:justify-center' >
                <Link to='/wheelchair'>
                    <img src={WheelchairImg} alt="" className='w-44 h-44 lg:mx-5' />
                </Link>

                <Link to='/stretcher'>
                    <img src={StretcherImg} alt="" className='w-44 h-44' />
                </Link>
            </div>

        
            <div className='lg:m-0 flex justify-center'>
                <img src={Vector2} alt="Vector2" />
            </div>


        </main>
    </>
  )
}

export default Hosp2