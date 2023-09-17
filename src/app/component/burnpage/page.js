'use client';

import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


function BurnPage() {

    const slides = [
        {
            url: '/images/1-1.mp4'
        },
        {
            url: '/images/2-1.mp4'
        },
        {
            url: '/images/3-1.mp4'
        },
        {
            url: '/images/4-1.mp4'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <div className='bg-bg-page'>
        <div className='w-full  max-h-full px-4'>
            CROtopia
        </div>
        <div className='h-[780px] w-full m-auto py-16 px-4  rounded-2xl relative group'>

        <video className='w-full h-full rounded-2xl bg-center bg-cover'
            src= {slides[currentIndex].url}
            alt="CROtopia 2.0"
            autoPlay 
            muted  
            loop
            controls={false} // Add controls for play, pause, and volume
            width={640} // Set the width of the video
            height={360} // Set the height of the video
            />
        </div>
         {/* Left Arrow */}
        <div className='absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-96 text-8xl rounded-full p-2 bg-black/20 cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} className='w-24 h-12 hover:text-side-button-color transition duration-500 ease-in-out'/>
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-96 text-8xl rounded-full p-2 bg-black/20 cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} className='w-40 h-12 hover:text-blue-500' />
        </div>
        <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-4xl' />
          </div>
        ))}
      </div>

    </div>
  )
}

export default BurnPage