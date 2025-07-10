'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-[#f4f1ff] text-[#007fc8] border-b border-[#007fc8] fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="flex items-center space-x-8 text-lg font-bold">
          <a href="#home" className="hover:underline">HOME</a>
          <a href="#achievements" className="hover:underline">ACHIEVEMENTS</a>
          <a href="#community" className="hover:underline">COMMUNITY</a>
        </nav>

        {/* Logo */}
        
        <a href="#home" className="flex items-center justify-center">
          <Image
            src="/images/logo1.jpg"
            alt="NOIR.PH Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* Right Nav */}
        <nav className="flex items-center space-x-8 text-lg font-bold">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#partners" className="hover:underline">PARTNERS</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>
      </div>
    </header>
  )
}
