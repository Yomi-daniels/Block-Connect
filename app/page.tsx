'use client';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Image from "next/image";
import ConnectBtn from "./Component/ConnectBtn";
import LandingPage from "./Component/LandingPage";
import StarsAnimation from "./Component/StarsAnimation";
import Features from "./Component/Features";
import TradingViewChart from "./Component/TradingViewChart";
import DailyRates from "./Component/DailyRates";
import NFTProductSection from "./Component/NFTProductSection";
import Footer from "./Component/Footer";
import Header from './Component/Header';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {




  return (
    <div
      className="min-h-screen flex flex-col bg-backgroundColor text-gray-900 dark:text-gray-100 font-inter"
    
    >
      <Header />
      <StarsAnimation />

      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <LandingPage />
        </section>

        <section id="features" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
          <Features />
        </section>

        <section id="tradingviewchart" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
          <TradingViewChart />
        </section>

        <section id="dailyrates" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
          <DailyRates />
        </section>

        <section id="productsection" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
          <NFTProductSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
