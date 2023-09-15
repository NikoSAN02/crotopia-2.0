import React from 'react'
import Image from 'next/image'
import Gallary from '../gallary/page'
import Team from '../team/page'


function HomePage() {
  return (
    <div className=' bg-header-bg h-full'>
      <div className="h-24 w-24 text-gray-color ">
          HomePage
      </div>
      <div>
        <Gallary/>
      </div>
      <div>
        <Gallary/>
      </div>
      <div>
        <Team/>
      </div>
    </div>          
      
  )
}

export default HomePage