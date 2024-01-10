"use client"; 
import { useEffect, useState } from 'react';
import Image from 'next/image'
import HomeNav from '../components/HomeNav'
import LogoAnimation from '../components/LogoAnimation'

export default function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {/* <div className="z-10">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert border rounded-full"
              width={100}
              height={24}
              priority
            />
      </div> */}
      {/* <LogoAnimation /> */}
      {/* {showMainPage && <HomeNav />} */}
      <div>
        Hey there welcome to the world of Blogs & news. 
      </div>
    </main>
  )
}
