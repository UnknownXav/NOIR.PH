'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#achievements', label: 'ACHIEVEMENTS' },
    { href: '#community', label: 'COMMUNITY' },
    { href: '#about', label: 'ABOUT' },
    { href: '#partners', label: 'PARTNERS' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 w-full bg-[#f4f1ff] text-[#007fc8] border-b border-[#007fc8] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Left Nav (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-start space-x-4 text-sm font-semibold">
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:underline focus:outline-none"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Logo Centered */}
        <div className="flex-shrink-0 flex justify-center">
          <a href="#home">
            <Image
              src="/images/logo1.jpg"
              alt="NOIR.PH Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right Nav (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-end space-x-4 text-sm font-semibold">
          {navLinks.slice(3).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:underline focus:outline-none"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#007fc8] z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full right-3 mt-1 bg-[#f4f1ff] border border-[#007fc8] rounded-md shadow-lg px-4 py-3 text-sm font-semibold w-fit space-y-2 z-40"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-[#007fc8] hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
