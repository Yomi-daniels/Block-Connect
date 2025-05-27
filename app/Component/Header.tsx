'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import ConnectBtn from "./ConnectBtn";
import { useAccount, useDisconnect } from "wagmi";

export default function Header() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleNavClick = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionIds = ["home", "features", "tradingviewchart", "dailyrates", "productsection"];
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full h-[100px] z-50 duration-300 ${
          isScrolled
            ? "bg-[rgba(0,0,0,0.5)] shadow-lg dark:bg-[rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="sticky-header relative flex items-center justify-between max-w-[1300px] h-full mx-auto px-6 md:px-10">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Block Connect Logo"
              width={48}
              height={48}
              priority
            />
            <a href="#home" className="text-2xl font-bold select-none">
              {/* BLOCK <span className="text-primary">CONNECT</span> */}
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-lg font-medium font-Studio">
              <li><a href="#home" className={`link hover:text-blue-500 ${activeSection === "home" ? "text-primary font-bold" : "text-white"}`}>Discover</a></li>
              <li><a href="#features" className={`link hover:text-blue-500 ${activeSection === "features" ? "text-primary font-bold" : "text-white"}`}>Features</a></li>
              <li><a href="#tradingviewchart" className={`link hover:text-blue-500 ${activeSection === "tradingviewchart" ? "text-primary font-bold" : "text-white"}`}>Chart</a></li>
              <li><a href="#dailyrates" className={`link hover:text-blue-500 ${activeSection === "dailyrates" ? "text-primary font-bold" : "text-white"}`}>Daily Rates</a></li>
              <li><a href="#productsection" className={`link hover:text-blue-500 ${activeSection === "productsection" ? "text-primary font-bold" : "text-white"}`}>Products</a></li>
            </ul>
          </nav>

          <div className="nav-btns hidden md:block">
            <ConnectBtn />
          </div>

          <div className="header-hamburger-menu md:hidden">
            <button
              aria-label="Open menu"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-900 bg-opacity-95 w-full absolute top-[100px] left-0 p-4 z-50">
            <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
              <li><a href="#home" onClick={handleNavClick} className={`${activeSection === "home" ? "text-primary font-bold" : "text-white"}`}>Discover</a></li>
              <li><a href="#features" onClick={handleNavClick} className={`${activeSection === "features" ? "text-primary font-bold" : "text-white"}`}>Features</a></li>
              <li><a href="#tradingviewchart" onClick={handleNavClick} className={`${activeSection === "tradingviewchart" ? "text-primary font-bold" : "text-white"}`}>Chart</a></li>
              <li><a href="#dailyrates" onClick={handleNavClick} className={`${activeSection === "dailyrates" ? "text-primary font-bold" : "text-white"}`}>Daily Rates</a></li>
              <li><a href="#productsection" onClick={handleNavClick} className={`${activeSection === "productsection" ? "text-primary font-bold" : "text-white"}`}>Products</a></li>
              <li><ConnectBtn /></li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
