"use client"
import Image from 'next/image'
import Header from './component/header/page'
import LendingPage from './component/page'
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
    <main>
     <div>

      <LendingPage/>
     </div>
    </main>
    </NextUIProvider>
  )
}
