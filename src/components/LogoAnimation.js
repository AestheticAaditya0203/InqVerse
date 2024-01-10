// components/LogoAnimation.js
"use client"; 
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const LogoAnimation = () => {
    const [animate, setAnimate] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
      // Disable logo animation after initial load
      setTimeout(() => {
        setAnimate(false);
        // Navigate to the home page after the animation finishes
        setTimeout(() => {
          router.push('/');
        }, 1000); // Adjust the duration as needed
      }, 2000); // Adjust the duration as needed
    }, [router]);
  

  return (
    <div className={`w-screen h-screen flex justify-center items-center ${animate ? 'animate-bounce' : ''}`}>
      <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="border rounded-full w-24 h-24"
              width={100}
              height={24}
              priority
            />
    </div>
  );
};

export default LogoAnimation;
