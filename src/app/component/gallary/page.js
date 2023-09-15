import React from 'react'
import {Image, Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";

function Gallary() {


  return (
    <div className='bg-header-bg h-screen flex justify-center items-center'>
         <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="./images/CRO_Logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Unity Build</p>
          <p className="text-small text-default-500">Crotopia</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>FPS game developed in Unity.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
          Click to view more.
      </CardFooter>
    </Card>
        <Image
      width={800}
      height={500}
      alt="NextUI hero Image with delay"
      src="https://app.requestly.io/delay/100/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    </div>
  )
}
export default Gallary