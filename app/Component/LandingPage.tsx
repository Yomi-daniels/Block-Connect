'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ConnectBtn from './ConnectBtn';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // On-load animations
      gsap.from('.landing-title', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.landing-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from('.landing-vector', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.landing-chart', {
        scrollTrigger: {
          trigger: '.landing-chart',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full flex flex-col justify-center items-center p-8 bg-backgroundColor text-lightBlue font-inter overflow-hidden mt-[8rem] max-sm:px-6"
    >
      {/* Radial Gradient Left Glow */}
      <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_#15bffd_0%,_transparent_70%)] opacity-30 pointer-events-none z-0" />

      {/* Radial Gradient Right Glow */}
      <div className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_#15bffd_0%,_transparent_70%)] opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left side: Text content */}
        <div className="relative max-w-full flex flex-col text-center md:text-center items-center justify-center">
          <h1 className="landing-title text-[5rem] font-Studio font-extrabold mb-4 text-white uppercase leading-[120%] tracking-[0.48px] max-sm:text-[3rem]">
            Block <span className="text-primary">Connect</span>
          </h1>
          <p className="landing-description w-full text-lg mb-8 max-w-md mx-auto md:mx-0 text-white font-studio max-sm:text-[1rem]">
            Seamlessly connect your wallet and interact with Web3 apps with ease and security. Experience the future of decentralized finance at your fingertips.
          </p>

          <div className="landing-vector relative mx-auto md:mx-0">
            <Image src="/Vector 31.png" alt="vector" width={600} height={50} objectFit="contain" />
          </div>
        </div>

        {/* Right side: Image */}
        <div className="absolute right-[-14em] top-0 max-w-md mx-auto md:mx-0 max-sm:-z-10 max-sm:right-[-8em] max-sm:blur-sm">
          <Image
            src="/G2JLcK1G8bL67UgAtHSKmVQpDJQ.gif"
            alt="Block"
            width={300}
            height={300}
          />
        </div>

        {/* Left side: Image */}
        <div className="absolute left-[2%] top-0 max-w-md mx-auto md:mx-0 rotate-[-12deg] -z-10 max-sm:blur-sm">
          <Image
            src="/Group 1261152692.png"
            alt="Block Connect Logo"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="landing-chart mx-auto mt-[3rem] relative w-full  h-[500px] max-sm:h-[250px]  ">
        <Image
          src="/tradingview-options-preview.png"
          alt="chart"
        fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
