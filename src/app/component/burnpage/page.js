'use client';

import React from 'react'

function BurnPage() {

    const slides = [
        {
            url: '/images/Untitled.gif'
        },
        {
            url: '/images/2-1.mp4'
        },
        {
            url: '/images/3-1.mp4'
        },
        {
            url: '/images/4-1.mp4'
        }
    ]
  return (
    <div>
        <div className='w-full  max-h-full px-4'>
            CROtopia
        </div>
        <div className='max-w-[660px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage: `url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

        </div>
        </div>

    </div>
  )
}

export default BurnPage