'use client';

import ConnectBtn from './ConnectBtn';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="relative h-full flex flex-col justify-center p-8 bg-backgroundColor text-lightBlue font-inter overflow-hidden mt-[8rem]">
      
      {/* Radial Gradient Left Glow */}
      <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_#15bffd_0%,_transparent_70%)] opacity-30 pointer-events-none z-0" />

      {/* Radial Gradient Right Glow */}
      <div className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_#15bffd_0%,_transparent_70%)] opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Text content */}
        <div className="w-full flex flex-col text-center md:text-center items-center justify-center">
          <h1 className="text-[5rem] font-Studio font-extrabold mb-4 text-white uppercase leading-[120%] tracking-[0.48px]">
            Block <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 text-white font-studio">
            Seamlessly connect your wallet and interact with Web3 apps with ease and security. Experience the future of decentralized finance at your fingertips.
          </p>
          {/* <ConnectBtn /> */}
          <div className="relative w-[700px] h-[50px] mx-auto md:mx-0">
            <Image src="/Vector 31.png" alt="vector" fill />
          </div>
        </div>

        {/* Right side: Image */}
        <div className="absolute right-0 top-0 max-w-md mx-auto md:mx-0">
          <Image
            src="/G2JLcK1G8bL67UgAtHSKmVQpDJQ.gif"
            alt="Block Connect Logo"
            width={300}
            height={300}
           
          />
        </div>

        {/* Left side: Image */}
        <div className="absolute left-[15%] top-0 max-w-md mx-auto md:mx-0 rotate-[-12deg] -z-10">
          <Image
            src="/Group 1261152692.png"
            alt="Block Connect Logo"
            width={150}
            height={150}
       
          />
        </div>
      </div>
      <div className='mx-auto mt-[3rem] relative '>
        <Image src="/tradingview-options-preview.png" alt='chart' width={1300} height={900} objectFit='cover' className='rounded-md'/>
      </div>
    </div>
  );
}
